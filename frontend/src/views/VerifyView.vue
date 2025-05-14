<template>
    <main class="container-fluid" style="overflow: hidden;">
        <section style="display: flex;justify-content: center;align-items: center;width:100vw;height:100vh;">
            <div class="card" style="width: 20rem;border: none !important;">
                <img class="card-img-top" v-lazy="'https://i.ibb.co/rG8QBv5p/Veetop-verified-email.jpg'" alt="Veetop Verify Image">
                <div class="card-body">
                    <p class="card-text" style="font-weight: 600;font-size: 0.8em;text-align: center;">
                       Check your inbox! We've sent a link to verify your email address.
                    </p>
                    <button class="p-2 m-5 justify-content-center" style="color:#fff;cursor: pointer;font-size:0.7em;background-color: #000;border-radius: 50px;width: auto ;text-align: center;outline:none;border:none;"> Didn't receive the email? Resend it </button>
                </div>
            </div>
        </section>
    </main>
</template>