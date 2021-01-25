<template>
  <div class="container-fluid">
    <div class="col-12">
      <div class="img_section2">
        <figure>
          <img
            src="https://static.iris.net.co/semana/upload/images/2017/11/17/547555_1.jpg"
          />
        </figure>
      </div>
      <div class="caja"><h1 id="final">Finalizo Sesion</h1></div>
    </div>
  </div>
</template>
<style>
#final {
  color: white;
  text-transform: uppercase;
  font-size: 80px;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 35px 0px 35px 0px;
  -moz-border-radius: 35px 0px 35px 0px;
  -webkit-border-radius: 35px 0px 35px 0px;
  border: 2px solid #5878ca;
  background-color: #5878ca;
  margin-top: 50px;
}
.caja #final:hover {
  color: yellow;
  background-color: blue;
}

.img_section2 figure img {
  width: 300px;
  height: auto;
  transition: 0.3s ease-in-out;
}
.img_section2:hover figure img {
  width: 350px;
}
</style>