<script lang="ts">
	function setPlaybackRate(event: Event) {
		(event.currentTarget as HTMLVideoElement).playbackRate = 0.5;
	}
</script>

<video
	aria-hidden="true"
	autoplay
	muted
	loop
	playsinline
	class="size-full object-cover"
	src="https://videos.pexels.com/video-files/18419650/18419650-uhd_2560_1440_30fps.mp4"
	onloadedmetadata={setPlaybackRate}
></video>
