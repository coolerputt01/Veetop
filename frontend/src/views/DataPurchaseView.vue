<template>
    <main>
        <section>
            <select class="form-select" aria-label="Default select example">
                <option selected>MTN</option>
                <option value="1">AIRTEL</option>
                <option value="2">GLO</option>
                <option value="3">9MOBILE</option>
            </select>

            <ul>
                <li>500mb #350</li>
                <li>1gb for #500</li>
                <li> 1.5gb for 900</li>
                <li>2.3gb for 900</li>
                <li> 6gb for 400</li>
            </ul>

            <input type="text" placeholder="Enter your number">
            <button class="p-2" style="background-color: #000;color: #fff;border-radius: 50px;width: 70%;border: none;outline: none;transition: all 0.5s;">Top Up</button>
        </section>
    </main>
</template>
<style scoped>
select > * {
    color: #000;
}
input {
    color: #000;
}
</style>