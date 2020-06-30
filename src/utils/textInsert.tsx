function insert($ref, prefix, hint = '', subfix = '') {
  const value = $ref.value
  if ($ref.selectionStart || $ref.selectionStart === 0) {
    let start = $ref.selectionStart
    let end = $ref.selectionEnd

    const restoreTop = $ref.scrollTop

    if (start === end) {
      $ref.value =
        value.substring(0, start) +
        prefix +
        hint +
        subfix +
        value.substring(end, value.length)
      $ref.selectionStart = start + prefix.length
      $ref.selectionEnd = end + prefix.length + hint.length
    } else {
      $ref.value =
        value.substring(0, start) +
        prefix +
        value.substring(start, end) +
        subfix +
        value.substring(end, value.length)
      $ref.selectionStart = start + prefix.length
      $ref.selectionEnd = end + prefix.length
    }

    $ref.focus()
    if (restoreTop >= 0) {
      $ref.scrollTop = restoreTop
    }
  }
}

const toolbar = {
  h1($ref) {
    insert($ref, '<h1>Your text</h1>')
  },
  h2($ref) {
    insert($ref, '## ', '二级标题')
  },
  h3($ref) {
    insert($ref, '### ', '三级标题')
  },
  h4($ref) {
    insert($ref, '#### ', '四级标题')
  },
  image($ref) {
    insert($ref, '![alt](', 'url', ')')
  },
  link($ref) {
    insert($ref, '[title](', 'url', ')')
  },
  code($ref) {
    insert($ref, '```', 'language', '\n\n```')
  },
  tab($ref) {
    insert($ref, '  ')
  }
}

export default ($ref, type) => {
  return toolbar[type]($ref)
}