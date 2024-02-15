<template>
  <div class="page">
    <navigation />
    <div>
      <slot>
        <p>This is the default content for the slot.</p>
      </slot>
    </div>
    <foot />
  </div>
</template>
