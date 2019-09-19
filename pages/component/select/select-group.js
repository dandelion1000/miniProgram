Component({
  data:{
    labels:[1,2,3],
    selected:[false,false,false],
  },
  methods: {
    itemtap: function(e){
      var selected = [false,false,false]
      console.log('selected', e)
      selected[e.currentTarget.dataset.index] = true;
      this.setData({
        selected:selected
      })
    }
  }
})