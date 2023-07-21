function getAnswer() {
    const userQuestion = document.getElementById("userQuestion").value;
    const historyDiv = document.getElementById("history");

    // logica para respnder as perguntas
    let answer = "";

    if (userQuestion.toLowerCase().includes("qual o seu nome")) {
        answer = "Meu nome é Lua, sou uma IA com perguntas pré-definidas!";
    } else if (userQuestion.toLowerCase().includes("me conte uma curiosidade")) {
        answer = "Os homens tem 6 vezes mais chances de serem atingidos por raios do que as mulheres, mas isso nós já sabemos o porquê!!";
    } else if (userQuestion.toLowerCase().includes("terminei com meu namorado")) {
        answer = "Sinto muito, mas aqui somos todos a favor do volta vida, porém em caso de traição, não se humilhe!!!";
    } else if (userQuestion.toLowerCase().includes("qual a melhor turma do arnulpho")) {
        answer = "Essa é fácil hein, com certeza 2v1 automação!!!";
    } else {
        answer = "Desculpe, não entendi a pergunta. Verifique se está no banco de dados!";
    }

    // cria elementos para pergunta e resposta e adiciona ao historico
    const questionDiv = document.createElement("div");
    questionDiv.className = "question";
    questionDiv.innerText = userQuestion;

    const answerDiv = document.createElement("div");
    answerDiv.className = "answer";
    answerDiv.innerText = answer;

    historyDiv.appendChild(questionDiv);
    historyDiv.appendChild(answerDiv);

    // limpa o campo de pergunta
    document.getElementById("userQuestion").value = "";
}