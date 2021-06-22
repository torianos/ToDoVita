var app = new Vue({
    el: '#app',
    data: {
        valueInput: '',
        needDoList: [],
        completeList: [],
        values: '',
        namer: [],
    },
    methods: {
        handlyInput(event) {
            this.valueInput = event.target.value;
        },
        addTask() {
            if (this.valueInput === '') { return };
            this.needDoList.push({
                title: this.valueInput,
                id: Math.random()
            });
            this.valueInput = '';
        },
        doCheck(index, type) {
            if (type === 'need') {
                const completeMask = this.needDoList.splice(index, 1);
                this.completeList.push(...completeMask);
            }
            else {
                const noCompleteMask = this.completeList.splice(index, 1);
                this.needDoList.push(...noCompleteMask);
            }
        },
        removeMask(index, type) {
            const toDoList = type === 'need' ? this.needDoList : this.completeList;
            toDoList.splice(index, 1);
        }
    }
});
new Vue({
    el: '#app1',
    data:  {
        selected: true,
        val: '',
        comp: []
    },
    methods: {
        toggleclass() {
            this.selected = !this.selected
        },
        addquest() {
            if (this.val === '') { return };
            this.comp.push({
                title: this.val,
                id: Math.random()
            });
            this.val = '';
            },
    },
    computed: {
        textbtn() {
            return this.selected ? 'Важная задача' : 'Обычная задача'
        }
    },

})

Vue.component('newtask1', {
    data: function () {
        return {
            proverka: this.$root.selected}
    },
    template: '\
      <li :class="{important : proverka}">\
        {{ title }}\
        <button v-on:click="$emit(\'remove\')">Удалить</button>\
      </li>\
    ',
    props: ['title']
  })


  new Vue({
    el: '#app2',
      data: {
          test: '',
        numbers: [ "й", "ц", "у", "к", "е", "н" ]
    },
      methods: {
          deltext() {
           this.test = this.test.slice(0, -1);
         }
    },
    computed: {
    },

  })
