import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value; // "add todo"に入力した情報を取得
  document.getElementById("add-text").value = ""; // Addボタンをクリックしたらinputエリアのテキストを空にする

  // li 作成
  const li = document.createElement("li");
  li.className = "list-row"; // "list-row"というクラス付与

  // p (リストテキスト作成)
  const p = document.createElement("p");
  p.className = "list-text"; // "list-text"というクラス付与
  p.innerText = inputText; // 入力したテキストを表示

  // liタグの子要素に各要素を設定
  li.appendChild(p);

  // 未完了リスト(TODOs)に追加
  const incompleteList = document.getElementById("incomplete-list");
  incompleteList.appendChild(li);
};

const add = document.getElementById("add-button");

add.addEventListener("click", onClickAdd);
