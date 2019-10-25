'use strict'
/* eslint-disable */
export const numberWithCommas = function(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const delay = time => new Promise(resolve => setTimeout(resolve, time))

export const addEvent = function(el, type, handler) {
  if (el.attachEvent) el.attachEvent('on' + type, handler)
  else el.addEventListener(type, handler)
}

export const removeEvent = function(el, type, handler) {
  if (el.detachEvent) el.detachEvent('on' + type, handler)
  else el.removeEventListener(type, handler)
}

export const hasClass = function(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ')
}

export const addClass = function(elem, className) {
  if (!hasClass(elem, className)) {
    elem.className += ' ' + className
  }
}

export const removeClass = function(elem, className) {
  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' '
  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0) {
      newClass = newClass.replace(' ' + className + ' ', ' ')
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '')
  }
}

export const toggleClass = function(elem, className) {
  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' '
  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0) {
      newClass = newClass.replace(' ' + className + ' ', ' ')
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '')
  } else {
    elem.className += ' ' + className
  }
}

export const mobilecheck = function() {
  var check = false
  ;(function(a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true
  })(navigator.userAgent || navigator.vendor || window.opera)
  return check
}

export const getAllUrlParams = function(url) {
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1)
  var obj = {}

  if (queryString) {
    queryString = queryString.split('#')[0]

    var arr = queryString.split('&')

    for (var i = 0; i < arr.length; i++) {
      var a = arr[i].split('=')

      var paramNum
      var paramName = a[0].replace(/\[\d*]/, function(v) {
        paramNum = v.slice(1, -1)
        return ''
      })

      var paramValue = typeof a[1] === 'undefined' ? true : a[1]

      paramName = paramName.toLowerCase()
      paramValue = paramValue.toLowerCase()

      if (obj[paramName]) {
        if (typeof obj[paramName] === 'string') {
          obj[paramName] = [obj[paramName]]
        }
        if (typeof paramNum === 'undefined') {
          obj[paramName].push(paramValue)
        } else {
          obj[paramName][paramNum] = paramValue
        }
      } else {
        obj[paramName] = paramValue
      }
    }
  }
  return obj
}

/* DIMENSION */

export const getUsableHeight = function() {
  // check if this page is within a app frame
  var isInAppMode =
    ('standalone' in navigator && navigator.standalone) ||
    (window.chrome &&
      window.top.chrome.app &&
      window.top.chrome.app.isInstalled)

  var ua = navigator.userAgent
  // memoized values
  var isIphone = ua.indexOf('iPhone') !== -1 || ua.indexOf('iPod') !== -1
  var isIpad = ua.indexOf('iPad') !== -1
  var isAndroid = ua.indexOf('Android') !== -1
  var isMobile = isIphone || isIpad || isAndroid

  // compute the missing area taken up by the header of the web browser to offset the screen height
  var usableOffset = 0
  if (isIphone) {
    usableOffset = 20
  } else if (isAndroid && ua.indexOf('Chrome') === -1) {
    usableOffset = 1
  }

  return function() {
    if (!isMobile) {
      return window.innerHeight
    }
    var isLandscape = window.innerWidth > window.innerHeight,
      height
    // on ios devices, this must use screen
    if (isIphone) {
      height = isLandscape ? screen.width : screen.height
      if (!isInAppMode) {
        height -= isLandscape ? 32 : 44
        height += 1
      }
    } else {
      height =
        (isLandscape ? window.outerWidth : window.outerHeight) /
        (window.devicePixelRatio || 1)
    }
    return height - usableOffset
  }
}

/* EN Helpers */

export const createBirthYearList = function() {
  const yearBegin = 1900
  const birthYear = document.getElementById('en__field_supporter_NOT_TAGGED_6')
  if (birthYear) {
    let c = document.createDocumentFragment()
    let cLabel = document.createElement('option')
    cLabel.value = ''
    cLabel.innerHTML = '出生年份'
    c.append(cLabel)
    for (let i = new Date().getFullYear(); i > yearBegin; i--) {
      let opt = document.createElement('option')
      opt.value = '01/01/' + i.toString()
      opt.innerHTML = i.toString()
      c.appendChild(opt)
    }
    birthYear.innerHTML = ''
    birthYear.append(c)
  }
}

export const enFormType = function() {
  const enform = document.querySelector('form.en__component')
  const email = document.getElementById('en__field_supporter_emailAddress')
  const phone = document.getElementById('en__field_supporter_phoneNumber')
  const formFields = document.querySelectorAll('.en__field--text')
  //
  if (email && phone) {
    email.setAttribute('type', 'email')
    phone.setAttribute('type', 'tel')
  }
  // init keyboard type
  if (formFields) {
    formFields.forEach(field => {
      let textField = field.querySelector('.en__field__input--text')
      let label = field.querySelector('.en__field__label').textContent
      textField.placeholder = label
    })
  }
  // init form label
  if (enform) {
    enform.setAttribute('autocomplete', 'off')
  }
}

export const enFormFieldInit = function() {
  const formInputs = document.querySelectorAll(
    '.en__field__input, #en__field_supporter_NOT_TAGGED_6'
  )
  if (formInputs) {
    Array.from(formInputs).map(input => {
      const formInteraction = function() {
        this.parentNode.classList.toggle('input--focused')
      }
      addEvent(input, 'focus', formInteraction)
      addEvent(input, 'blur', formInteraction)
    })
  }
}

export const enFormCollapse = function() {
  const enform = document.querySelector('.enform')
  // init focus & blur class
  const expandForm = () => {
    enform.classList.add('form--active')
  }
  // expandForm
  const collapseForm = () => {
    enform.classList.remove('form--active')
  }
  addEvent(
    document.querySelector('.en__field--emailAddress input'),
    'click',
    expandForm
  )
  addEvent(document.querySelector('.enform__close'), 'click', collapseForm)
  window.addEventListener('keydown', event => {
    if (event.key == 'Escape' || event.key == 'Esc') {
      collapseForm
    }
  })
}

export const enValidators = () => {
  const en = window.EngagingNetworks
  let validationErrorMessage = {}
  let validationPatterns = {}
  const emailField = document.getElementById('en__field_supporter_emailAddress')
  const nameField = document.getElementById('en__field_supporter_NOT_TAGGED_19')
  const mobileField = document.getElementById('en__field_supporter_phoneNumber')

  function validateField(target, fieldName) {
    let validator = new RegExp(validationPatterns[fieldName])
    let validation = validator.test(target.value)
    if (validation) {
      removeClass(target, 'invalid')
      removeClass(target, 'animated')
      removeClass(target, 'shake')
      addClass(target, 'valid')
    } else {
      removeClass(target, 'valid')
      addClass(target, 'invalid')
      addClass(target, 'animated')
      addClass(target, 'shake')
    }
  }

  if (en) {
    validationPatterns = {
      email: en.validators[0].format,
      name: en.validators[1].format,
      mobile: en.validators[2].format,
    }
    validationErrorMessage = {
      email: en.validators[0].errorMessage,
      name: en.validators[1].errorMessage,
      mobile: en.validators[2].errorMessage,
    }
  } else {
    validationPatterns = {
      email:
        '^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$',
      name: '^[^\nd`~!@#$%^&*()-_=+[]{}\\|;:\'",<.>/?]+$',
      mobile: '^(10001000|[23569]{1}d{7})$',
    }
    validationErrorMessage = {
      email: '電郵地址不正確',
      name: '姓名格式不正確，請不要輸入數字或符號',
      mobile: '手提號碼格式不正確，需為8位數字',
    }
  }

  if (en) {
    emailField.addEventListener('blur', e => {
      validateField(e.target, 'email')
    })
    nameField.addEventListener('blur', e => {
      validateField(e.target, 'name')
    })
    mobileField.addEventListener('blur', e => {
      validateField(e.target, 'mobile')
    })
  }
}
