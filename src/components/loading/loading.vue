<template>
	<div class="loading-wrap">
		<div class="loading">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.loading-wrap {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	flex: 1;
}
.loader {
		background: rgba(255, 255, 255, 0.5);
		bottom: 0;
		left: 0;
		overflow: hidden;
		position: fixed;
		right: 0;
		top: 0;
		z-index: 50;
}

.loader-inner {
		bottom: 0;
		height: 60px;
		left: 0;
		margin: auto;
		position: absolute;
		right: 0;
		top: 0;
		width: 100px;
}

.loader-line-wrap {
		-webkit-animation:
		spin 2000ms cubic-bezier(.175, .885, .32, 1.275) infinite
	;
						animation:
		spin 2000ms cubic-bezier(.175, .885, .32, 1.275) infinite
	;
		box-sizing: border-box;
		height: 50px;
		left: 0;
		overflow: hidden;
		position: absolute;
		top: 0;
		-webkit-transform-origin: 50% 100%;
						transform-origin: 50% 100%;
		width: 100px;
}
.loader-line {
		border: 4px solid transparent;
		border-radius: 100%;
		box-sizing: border-box;
		height: 100px;
		left: 0;
		margin: 0 auto;
		position: absolute;
		right: 0;
		top: 0;
		width: 100px;
}
.loader-line-wrap:nth-child(1) { -webkit-animation-delay: -50ms; animation-delay: -50ms; }
.loader-line-wrap:nth-child(2) { -webkit-animation-delay: -100ms; animation-delay: -100ms; }
.loader-line-wrap:nth-child(3) { -webkit-animation-delay: -150ms; animation-delay: -150ms; }
.loader-line-wrap:nth-child(4) { -webkit-animation-delay: -200ms; animation-delay: -200ms; }
.loader-line-wrap:nth-child(5) { -webkit-animation-delay: -250ms; animation-delay: -250ms; }

.loader-line-wrap:nth-child(1) .loader-line {
		border-color: hsl(0, 80%, 60%);
		height: 90px;
		width: 90px;
		top: 7px;
}
.loader-line-wrap:nth-child(2) .loader-line {
		border-color: hsl(60, 80%, 60%);
		height: 76px;
		width: 76px;
		top: 14px;
}
.loader-line-wrap:nth-child(3) .loader-line {
		border-color: hsl(120, 80%, 60%);
		height: 62px;
		width: 62px;
		top: 21px;
}
.loader-line-wrap:nth-child(4) .loader-line {
		border-color: hsl(180, 80%, 60%);
		height: 48px;
		width: 48px;
		top: 28px;
}
.loader-line-wrap:nth-child(5) .loader-line {
		border-color: hsl(240, 80%, 60%);
		height: 34px;
		width: 34px;
		top: 35px;
}

@-webkit-keyframes spin {
		0%, 15% {
		-webkit-transform: rotate(0);
						transform: rotate(0);
	}
	100% {
		-webkit-transform: rotate(360deg);
						transform: rotate(360deg);
	}
}

@keyframes spin {
		0%, 15% {
		-webkit-transform: rotate(0);
						transform: rotate(0);
	}
	100% {
		-webkit-transform: rotate(360deg);
						transform: rotate(360deg);
	}
}
.loading{
	width: 80px;
	height: 40px;
	margin: 0 auto;
	margin-top:100px;
}
.loading span{
	display: inline-block;
	width: 8px;
	height: 100%;
	border-radius: 4px;
	background: lightgreen;
	-webkit-animation: load 1s ease infinite;
}
@-webkit-keyframes load{
	0%,100%{
		height: 40px;
		background: lightgreen;
	}
	50%{
		height: 70px;
		margin: -15px 0;
		background: lightblue;
		}
}
.loading span:nth-child(2){
	-webkit-animation-delay:0.2s;
}
.loading span:nth-child(3){
	-webkit-animation-delay:0.4s;
}
.loading span:nth-child(4){
	-webkit-animation-delay:0.6s;
}
.loading span:nth-child(5){
	-webkit-animation-delay:0.8s;
}
</style>
