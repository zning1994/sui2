export function date() {
  let currentDate = new Date();
  let dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let date = currentDate.toLocaleDateString("zh-Hans-CN", dateOptions);
  const time = currentDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false});
  const timezone = currentDate.getTimezoneOffset()/(-60);
  const symbol = timezone>0 ? '+' : '-';
  document.getElementById("header_date").innerHTML = `<span class="date">${date}</span><span class="time">本地时间: ${time} (UTC${symbol}${timezone}) </span>`;
}

export function greet() {
  let currentTime = new Date();
  let greet = Math.floor(currentTime.getHours() / 6);
  switch (greet) {
    case 0:
      document.getElementById("header_greet").innerHTML = "Good night 夜深了，早点睡。:)";
      break;
    case 1:
      document.getElementById("header_greet").innerHTML = "Good morning! 祝今日一切好运！:)";
      break;
    case 2:
      document.getElementById("header_greet").innerHTML = "Good afternoon! 饮茶了咩？:)";
      break;
    case 3:
      document.getElementById("header_greet").innerHTML = "Good evening! 放松下，别紧张。:)";
      break;
  }
}
