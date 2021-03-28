import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value; // "add todo"に入力した情報を取得
  document.getElementById("add-text").value = ""; // Addボタンをクリックしたらinputエリアのテキストを空にする

  // li 作成
  const li = document.createElement("li");
  li.className = "list-row"; // "list-row"というクラス付与

  // p (リストテキスト生成)
  const p = document.createElement("p");
  p.className = "list-text"; // "list-text"というクラス付与
  p.innerText = inputText; // 入力したテキストを表示

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.className = "list-btn";
  completeButton.innerText = "Done";
  completeButton.addEventListener("click", () => {
    alert("Done!");
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.className = "list-btn";
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親要素(li)をTODOsから削除
    const deleteTarget = deleteButton.parentNode; // 親要素のnode取得
    document.getElementById("incomplete-list").removeChild(deleteTarget); // 要素の削除
  });

  // liタグの子要素に各要素を設定
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  // 未完了リスト(TODOs)に追加
  const incompleteList = document.getElementById("incomplete-list");
  incompleteList.appendChild(li);
};

const add = document.getElementById("add-button");

add.addEventListener("click", onClickAdd);
