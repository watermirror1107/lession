<template>
    <button :class="[$style.button, $style.buttonClose]">X</button>
</template>

<script>
	export default {
		name: 'cssModule',
	};
</script>
<!-- 使用 CSS Modules -->
<style module>
    .button {
        border: none;
        border-radius: 2px;
    }

    .buttonClose {
        background-color: red;
    }
</style>



