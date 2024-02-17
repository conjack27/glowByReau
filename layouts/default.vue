<template>
  <div class="main">
    <navigation />
    <div class="page">
      <div>
        <slot>
          <p>This is the default content for the slot.</p>
        </slot>
      </div>
    </div>
    <foot />
  </div>
</template>
