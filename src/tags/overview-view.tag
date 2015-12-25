<overview-view>
  <h3>Overview</h3>
  <button type="button" onclick="{add}">Add number</button>

  <script type="es6">
    import { addItem } from '../intents'
    
    this.add = () => {
      addItem(Math.random() * 10)
    }
  </script>
</overview-view>
