document.addEventListener('DOMContentLoaded', function () {
    const cursor = document.querySelector('.custom-cursor');

    document.addEventListener('mousemove', (e) => {
      // Set the cursor's position to the mouse coordinates
      cursor.style.left = e.pageX + 'px';
      cursor.style.top = e.pageY + 'px';
    });

    // You can add additional functionality or customize the cursor further as needed

    // For example, you may want to change the cursor size on hover
    document.addEventListener('mouseenter', () => {
      cursor.style.width = '30px';
      cursor.style.height = '30px';
    });

    document.addEventListener('mouseleave', () => {
      cursor.style.width = '20px';
      cursor.style.height = '20px';
    });
  });



  document.addEventListener('DOMContentLoaded', function () {
    const cursor = document.querySelector('.custom-cursor');

    document.addEventListener('mousemove', (e) => {
      // Set the cursor's position to the mouse coordinates
      cursor.style.left = e.pageX + 'px';
      cursor.style.top = e.pageY + 'px';
    });
  });