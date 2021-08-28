<template>
  <div class="btn-group">
      <button  @click="filterPost('recent')" :class="{active: current === 'recent'}">recent</button>
      <button  @click="filterPost('all')" :class="{active: current === 'all'}">all</button>
  </div>
</template>

<script>
export default {
  props: [ 'current' ],
    setup(props, { emit }) {
      let filterPost = (value) => {
          // console.log(value);
        emit ("filter", value)
        
      }
      return { filterPost }
    }
}
</script>

<style>
  .btn-group {
      margin: 0px 0px -10px 25px;
  }
  .btn-group button {
    display: inline-block;
    border: 0;
    background: none;
    color: #888;
    font-size: 0.7em;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding-left: 5px;
  }
  button.active {
    color: #333;
    border-radius: 0;
    border-bottom: 1px solid #444;
  }
  
 .btn-group button:hover{
    background-color: white;
  }
  
</style>