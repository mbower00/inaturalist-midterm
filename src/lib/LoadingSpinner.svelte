<div class="container">
    <div class="spinner">
        <div class="ball left"></div>
        <div class="ball right"></div>
    </div>    
</div>

<style>
    /* using code from:
    - https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate
    - https://developer.mozilla.org/en-US/docs/Web/CSS/animation
    - https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count
     */
    .container{
        margin: 20px auto;
        width: fit-content;
    }
    .spinner {
        position: relative;
        width: 50px;
        height: 20px;
        animation: 1s linear 0s infinite spin-around;
    }
    .ball {
        position: absolute;
        width: 20px;
        height: 20px;
        background-color: var(--primary-color);
        border-radius: 100%;
    }
    .left {
        left: 0;
        animation: 2s linear 0s infinite alternate move-right;
    }
    .right {
        animation: 2s linear 0s infinite alternate move-left;
        right: 0;
    }
    @keyframes spin-around {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @keyframes move-right {
        0% {
            transform: translateX(0px);
        }
        50% {
            transform: translateX(30px);
        }
    }
    @keyframes move-left {
        0% {
            transform: translateX(0px);
        }
        50% {
            transform: translateX(-30px);
        }
    }
</style>