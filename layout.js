const arrange = () => {
  const [page1, page2] = document.querySelectorAll('.page');

  const moveTo = (parent, childIds) => {
    childIds.forEach(id => {
      parent.append(document.querySelector(id));
    });
  }

  (() => {
    const [col1, col2] = page1.querySelectorAll('.column');
    moveTo(col1, ['#variables', '#operators', '#functions'])
    moveTo(col2, ['#strings', '#objects', '#loops'])
  })();

  (() => {
    const [col1, col2] = page2.querySelectorAll('.column');
    moveTo(col1, ['#arrays', '#modifying-arrays', '#searching-arrays', '#copying-arrays'])
    moveTo(col2, ['#string-functions', '#traversing-arrays', '#wild'])
  })();
}

window.addEventListener('load', arrange);