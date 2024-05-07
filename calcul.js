let screen_con = '';

function add_screen(value) {
    screen_con += value;
  document.getElementById('display').value = screen_con;
}
function square_root() {
  if(screen_con=="")
  {

  }
  else
  {
  try {
    result = Math.sqrt(eval(screen_con));
    document.getElementById('display').value = result.toFixed(8);
    screen_con="";
  } catch (error) {
    document.getElementById('display').value = '🤖MATH ERROR🤖';
    screen_con="";
  }
}
}
function clearq() {
  screen_con = "";
  document.getElementById('display').value = screen_con;
}
function clear_back() {
    let lengt = screen_con.length;
    screen_con=screen_con.slice(0,lengt-1);
    document.getElementById('display').value = screen_con;
  }
function evalu()
{
  if(screen_con=="")
  {
    document.getElementById('display').value = screen_con;
  }
  else{
    try {
        result = eval(screen_con);
        document.getElementById('display').value = result;
        screen_con = result.toString();
      } catch (error) {
        document.getElementById('display').value = '🤖MATH ERROR🤖';
        screen_con="";
      }
    }
}