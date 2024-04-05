document.getElementById("scale1").addEventListener("click", () => {
  clickScaleIn("scale1");
});

document.getElementById("scale2").addEventListener("click", () => {
  clickScaleOut("scale2");
});

document.getElementById("scale3").addEventListener("click", () => {
  clickScaleIn2("scale3");
});

document.getElementById("scale4").addEventListener("click", () => {
  clickScaleOut2("scale4");
});

function clickScaleIn(name) {
  const animation = document.getElementById(name).animate(
    [
      //キーフレーム
      {transform: 'scale(1)'},
      {transform: 'scale(2)'}
    ],    
    {
      //タイミングオプション
      duration: 1000,
      fill: "forwards"
    }
  );
}

function clickScaleOut(name) {
  const animation = document.getElementById(name).animate(
    [
      {transform: 'scale(0.5)'}
    ],    
    {
      duration: 1000,
      fill: "forwards"
    }
  );
}

function clickScaleIn2(name) {
  const animation = document.getElementById(name).animate(
    [
      //キーフレーム
      {transform: 'scale(1)'},
      {transform: 'scale(2,1)'}
    ],    
    {
      //タイミングオプション
      duration: 1000,
    }
  );
}

function clickScaleOut2(name) {
  const animation = document.getElementById(name).animate(
    [
      //キーフレーム
      {transform: 'scale(1)'},
      {transform: 'scaleY(0.5)'}
    ],    
    {
      //タイミングオプション
      duration: 1000,
      fill: "forwards"
    }
  );
}