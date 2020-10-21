<template>
  <nav class="navbar">
    <h1 class="brand">
      Warehouses
    </h1>
  </nav>
</template>

<style  scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  background: seagreen;
  color: snow;
  padding: 16px;
  position: sticky;
  top: 0;
}
.brand{
    font-family: cursive;
    font-size: 40px;
    text-shadow: 1px 2px 1px;
    transition: 0.7s;
}

.brand:hover{
    transform: scale(1.3);
}
</style>