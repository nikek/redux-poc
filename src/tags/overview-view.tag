import { addItem } from '../intents'

<overview-view>
  <h3>Overview</h3>
  <button type="button" onclick="{add}">Add number</button>
  <script type="es6">
    this.add = () => {
      let num = Math.random() * 10
      addItem(num)
    }
  </script>
</overview-view>
