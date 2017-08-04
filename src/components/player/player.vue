<template>
	<div class="player" ref="$player">
		<video
			@play="onPlay"
			@loadstart="onLoadstart"
			@canplay="onCanplay"
			@pause="onPause"
			@ended="onEnded"
			@error="onError"
			@timeupdate="onTimeupdate"
			id="video"
			ref="$video"
			:controls="false"
			width="100%"
			height="100%"
			:src="src">
			您的浏览器不支持 video 标签。
		</video>
		<div class="player__mask" @mousemove="showControls" @click.self="changePlayStatus" @dblclick.self="fullScreen">
			<div class="controls" :class="{ 'controls--show': isShowControls || !playStatus }">
				<!-- 控件 -->
				<div class="controls-box">
					<div class="controls-item">
						<div class="controls-item__button" @click="changePlayStatus">
							<i class="iconfont" :class="{ 'icon-video-play': !playStatus, 'icon-video-pause': playStatus }"></i>
						</div>
					</div>
					<div class="controls-item">{{ currentTime | secondsFormat }} / {{ totalTime | secondsFormat }}</div>
				</div>
				<div class="controls-box">
					<div class="controls-item">
						<div class="controls-item__button" @click="valumeMute">
							<i class="iconfont" :class="{ 'icon-video-volume': !isMute, 'icon-video-mute': isMute }"></i>
						</div>
						<div class="controls-item__progress" ref="$volumeProgress" @click="valumeSelect($event)">
							<div class="progress__bar"></div>
							<div class="progress__play" :style="{ width: volume + '%' }">
								<div class="progress__circle" @mousedown.prevent="volumeDown"></div>
							</div>
						</div>
					</div>
					<div class="controls-item">
						<div class="controls-item__button" @click="fullScreen">
							<i class="iconfont icon-video-fullscreen"></i>
						</div>
					</div>
				</div>
				<!-- 进度条 -->
				<div class="player__progress" @click="onSelect($event)" ref="$progress">
					<div class="progress__bar"></div>
					<div class="progress__load" :style="{ width: loadPercent + '%' }"></div>
					<div class="progress__play" :style="{ width: percent + '%' }">
						<div class="progress__circle" @mousedown.prevent="onButtonDown">
						</div>
					</div>
				</div>
			</div>
		</div>
		<img v-if="src !==null && !playStatus" class="player__logo" @click.self="changePlayStatus" src="./play.png" alt="点击播放">
		<div v-if="src === null" class="player__err">
			<slot name="err">
				<p class="err">播放源出问题啦  (╯￣Д￣)╯╘═╛</p>
			</slot>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			src: {
				type: String,
				default: null,
			},
		},
		data () {
			return {
				playStatus: false, // 播放状态
				totalTime: 0, // video总时长
				currentTime: 0, // 已播放时长
				loadTime: 0, // 已缓冲时长
				canPlay: false, // 是否正在加载
				lineWidth: 0, // 已播放长度
				isDragging: false, // 是否正在拖放
				volume: 50, // 音量
				volumeTem: 50, // 暂存音量
				isVolumeDrgging: false,	// 是否正在拖放音量
				isShowControls: false, // 是否显示控制条
				timer: null,
			}
		},
		mounted () {
			this.$nextTick(() => {
				this.volume = this.$refs.$video.volume * 100;
			});
		},
		methods: {
//---------------------------------进度条拖动start--------------------------------
			onButtonDown (event) {
				this.isDragging = true;
				this.onDragStart(event);
				window.addEventListener('mousemove',   this.onDragging);
				window.addEventListener('mouseup',     this.onDragEnd);
				window.addEventListener('contextmenu', this.onDragEnd);
			},
			onDragStart (event) {
				// console.log('start',event.clientX);
			},
			onDragging (event) {
				if (this.isDragging) {
					let val = event.clientX - this.$refs.$progress.getBoundingClientRect().left; // 按钮相对进度条水平坐标
					val = val < 0 ? 0 : val;
					val = val > this.$refs.$progress.offsetWidth ? this.$refs.$progress.offsetWidth : val;
					this.lineWidth = val;
				}
			},
			onDragEnd () {
				if (this.isDragging) {
					//	防止在 mouseup 后立即触发onSelect的click，导致滑块有几率产生一小段位移
					//	这个坑，element源码是这样解决的
					setTimeout(() => {
						this.isDragging = false;
					}, 0);
					window.removeEventListener('mousemove',   this.onDragging);
					window.removeEventListener('mouseup',     this.onDragEnd);
					window.removeEventListener('contextmenu', this.onDragEnd);
				}
			},
//---------------------------------进度条拖动end---------------------------------
//---------------------------------音量条拖动start-------------------------------
			volumeDown () {
				this.isVolumeDrgging = true;
				this.valumeDragStart(event);
				window.addEventListener('mousemove',   this.valumeDragging);
				window.addEventListener('mouseup',     this.valumeDragEnd);
				window.addEventListener('contextmenu', this.valumeDragEnd);
			},
			valumeDragStart (event) {
				// todo
			},
			valumeDragging (event) {
				if (this.isVolumeDrgging) {
					let val = event.clientX - this.$refs.$volumeProgress.getBoundingClientRect().left;
					val = val < 0 ? 0 : val;
					val = val > this.$refs.$volumeProgress.offsetWidth ? this.$refs.$volumeProgress.offsetWidth : val;
					this.volume = val;
				}
			},
			valumeDragEnd () {
				if (this.isVolumeDrgging) {
					//	防止在 mouseup 后立即触发onSelect的click，导致滑块有几率产生一小段位移
					//	这个坑，element源码是这样解决的
					setTimeout(() => {
						this.isVolumeDrgging = false;
					}, 0);
					window.removeEventListener('mousemove',   this.valumeDragging);
					window.removeEventListener('mouseup',     this.valumeDragEnd);
					window.removeEventListener('contextmenu', this.valumeDragEnd);
				}
			},
//---------------------------------音量条拖动end---------------------------------
//---------------------------------video控制方法start----------------------------
			changePlayStatus () {
				this.playStatus = !this.playStatus;
			},
			onSelect (event) {
				if (this.isDragging) return;
				this.lineWidth = event.offsetX;
			},
			valumeSelect (event) {
				if (this.isVolumeDrgging) return;
				this.volume = event.offsetX;
			},
			valumeMute () {
				if (!this.isMute) {
					this.volumeTem = this.volume;
					this.volume = 0;
				} else {
					this.volume = this.volumeTem;
				}
			},
			fullScreen () {
				const fullscreenElement =
					document.fullscreenElement ||
					document.mozFullScreenElement ||
					document.webkitFullscreenElement;
				if (fullscreenElement) {
					try {
						['exitFullscreen', 'msExitFullscreen', 'mozCancelFullScreen', 'webkitExitFullscreen'].forEach(v => {
							if (v in document) {
								document[v]();
								throw v;
							}
						});
					} catch(e) {
						// console.log(e);
					}
				} else {
					try {
						['requestFullscreen', 'mozRequestFullscreen', 'webkitRequestFullscreen'].forEach(v => {
							if (v in this.$refs.$player) {
								this.$refs.$player[v]();
								throw v;
							}
						});
					} catch(e) {
						// console.log(e);
					}
				}
			},
			play (src) {
				if (src != this.src) {
					this.totalTime = 0;
					this.currentTime = 0;
					this.loadTime = 0;
					this.src = src;
				} else {
					return this.$refs.$video.play();
				}
			},
			pause () {
				this.$refs.$video.pause();
			},
			showControls () {
				if (this.timer) {
					clearTimeout(this.timer);
					delete this.timer;
				}
				this.isShowControls = true;
				this.timer = setTimeout(() => {
					this.isShowControls = false;
				}, 2000);
			},
//---------------------------------video控制方法end-----------------------------
//---------------------------------video事件绑定start----------------------------
			onLoadstart () {
				this.canPlay = false;
			},
			onCanplay () {
				this.canPlay = true;
				this.totalTime   = this.$refs.$video.duration;
				this.currentTime = this.$refs.$video.currentTime;
			},
			onPause () {
				//TODO
				this.playStatus  = false;
			},
			onPlay () {
				//TODO
				this.playStatus  = true;
			},
			onEnded () {
				this.playStatus  = false;
				this.currentTime = 0;
				this.$refs.$video.currentTime = 0;
			},
			onError (e) {
				this.$alert('视频源发生错误，请联系客服', '视频');
			},
			onTimeupdate () {
				if (!this.isDragging && this.$refs.$video.buffered.length > 0) {
					this.currentTime = this.$refs.$video.currentTime;
					this.loadTime = this.$refs.$video.buffered.end(0);
				}
			}
//---------------------------------video事件绑定end---------------------------------
		},
		computed: {
			percent () {
				return this.currentTime / this.totalTime * 100
			},
			loadPercent () {
				return	this.loadTime / this.totalTime * 100
			},
			isMute () {
				return !this.volume;
			},
		},
		watch: {
			playStatus (status) {
				if (status) {
					this.$refs.$video.play();
				} else {
					this.$refs.$video.pause();
				}
			},
			volume (val) {
				this.$refs.$video.volume = this.volume / 100;
			},
			lineWidth (val) {
				let percent = val / this.$refs.$video.offsetWidth * this.totalTime;
				this.currentTime = percent;
				this.$refs.$video.currentTime = percent;
			},
			canPlay (val) {
				if (val) {
					this.$refs.$video.play();
				}
			}
		},
		filters: {
			secondsFormat (time) {
				time = time || 0
				let [h, m, s] = [
					parseInt(time / 3600),
					parseInt(time % 3600 / 60),
					parseInt(time % 60)
				]
				h = h < 10 ? '0' + h : h
				m = m < 10 ? '0' + m : m
				s = s < 10 ? '0' + s : s
				return `${h}:${m}:${s}`
			}
		}
	}
</script>

<style scoped lang="less">
	@import "./player.less";
</style>
