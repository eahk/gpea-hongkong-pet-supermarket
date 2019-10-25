export { mainShare, whatsAppShare }

const mainShare = event => {
  event.preventDefault()
  //
  const fbShare = () => {
    var baseURL = 'https://www.facebook.com/sharer/sharer.php'
    var u =
      'https://act.greenpeace.org/page/42785/petition/1?utm_campaign=2019-supermarket&utm_source=facebook&utm_medium=social&utm_content=main_share'
    var t = (window.innerHeight - 436) / 2
    var l = (window.innerWidth - 626) / 2
    window.open(
      baseURL + '?u=' + encodeURIComponent(u),
      '_blank',
      'width=626,height=436,top=' + t + ',left=' + l
    )
  }
  // WEB SHARE API
  if (navigator.share) {
    // we can use web share!
    navigator
      .share({
        title: '',
        text:
          '你覺唔覺超級市場嘅商品被即棄塑膠層層包裝好無謂？呢啲包裝一拆開後就成為垃圾，甚至從各種渠道進入海洋，污染生態，更有可能會從食物鏈危害你嘅健康。立即聯署，要求超市卸「裝」👉 ',
        url: 'https://act.gp/2VX4GvH',
      })
      .then(() => console.log('Successfully shared'))
      .catch(error => console.log('Error sharing:', error))
  } else {
    // provide a fallback here
    fbShare()
  }
}

const whatsAppShare = event => {
  event.preventDefault()
  var w =
    'https://api.whatsapp.com/send?text=Hi👋 你覺唔覺超級市場嘅商品被即棄塑膠層層包裝好無謂？呢啲包裝一拆開後就成為垃圾，甚至從各種渠道進入海洋，污染生態，更有可能會從食物鏈危害你嘅健康。立即聯署，要求超市卸「裝」👉 https://act.gp/2VX4Fb7'
  window.open(w)
}
