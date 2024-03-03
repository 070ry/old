function displayTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const dayOfWeek = ['日', '月', '火', '水', '木', '金', '土'][now.getDay()];
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const formattedTime = `${year}年${month}月${day}日(${dayOfWeek}) ${hours}時${minutes}分${seconds}秒`;
  document.getElementById('ct').innerText = formattedTime;
}
