# Todo App

HTML / CSS / JavaScriptを使用して作成したTodoアプリです。
JavaScriptの学習を目的として、タスクの追加・編集・削除・完了管理などの基本的な機能を実装しました。

## Features

- タスクの追加
- タスクの編集
- タスクの削除
- タスクの完了・未完了の切り替え
- localStorageを利用したタスクデータの保存
- Enterキーによるタスク追加
- タスクの状態を保持したままページを再読み込み可能

## Technologies

- HTML
- CSS
- JavaScript
- Git / GitHub

## Data Storage

タスクデータの保存にはlocalStorageを使用しています。

ページを再読み込みしても、登録したタスクや完了状態が保持されるように実装しました。

## How to Use

1. 入力欄にタスクを入力
2. 「追加」ボタンまたはEnterキーでタスクを追加
3. タスクをクリックして完了・未完了を切り替え
4. 編集・削除機能からタスクを管理

## Implementation

タスクの表示・更新処理をまとめるため、`renderTodos`関数を作成し、タスクの追加・編集・削除・完了状態の変更後に画面を再描画する構成にしています。

また、localStorageを利用してタスクデータをブラウザに保存し、ページを再読み込みした場合でもデータが保持されるようにしました。

## Learning Points

このアプリの制作を通して、以下のJavaScriptの機能を学習しました。

- DOM操作
- イベント処理
- 関数・引数
- 配列操作
- オブジェクト
- localStorage
- JSONデータの保存・取得
- 条件分岐
- テンプレートリテラル
- Git / GitHubを使用したコード管理
