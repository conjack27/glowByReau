<template>
  <div class="main">
    <navigation />
    <div class="content">
      <div>
        <slot>
          <p>This is the default content for the slot.</p>
        </slot>
      </div>
    </div>
    <foot />
  </div>
</template>
