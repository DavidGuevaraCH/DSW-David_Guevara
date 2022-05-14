var myQuestions = [
    {
    question: "1- ¿la etiqueta que se usa para insertar imágenes es &lt;img&gt;?",
    answers: {
    a: 'Verdadero',
    b: 'Falso'
    },
    correctAnswer: 'a'
    },
    {
    question: "2- ¿en Microsoft Visual Studio Code al digitar la etiqueta &lt;img&gt;, automáticamente me crea la etiqueta completa para poner la ruta de la imagen y poder agregar el autor de la imagen?",
    answers: {
    a: 'Verdadero',
    b: 'Falso',
    },
    correctAnswer: 'a'
    },
    {
    question: "3- ¿La etiqueta de cierre de (img) es &lt;img/&gt;?",
    answers:{
    a:'Verdadero',
    b:'Falso',
    },
correctAnswer: 'b'
    },
    {
    question: "4- si queremos que al hacer clic en el enlace, este se abra en una pestaña nueva en el navegador el atributo que demos utilizar es target?",
    answers:{
    a: 'Verdadero',
    b : 'Falso',
    },
    correctAnswer: 'a'
    },
    {
    question: "5- ¿para agregar enlaces externos en HTML se usa la etiqueta &lt;a&gt;?",
    answers:{
    a: 'Verdadero',
    b: 'Falso',
    },
    correctAnswer: 'a'
    }
    ];
    
    var quizContainer = document.getElementById('quiz');
    var resultsContainer = document.getElementById('results');
    var submitButton = document.getElementById('submit');
    
    generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
    
    function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
    
    function showQuestions(questions, quizContainer){
    // necesitaremos un lugar para almacenar la salida y las opciones de respuesta 
    var output = [];
    var answers;
    
    // para cada pregunta... 
    for(var i=0; i<questions.length; i++){
    
    // primero restablecer la lista de respuestas 
    answers = [];
    
    // para cada respuesta disponible... 
    for(letter in questions[i].answers){
    
    // ...añadir un botón de opción html 
    answers.push(
    '<label>'
    + '<input type="radio" name="question'+i+'" value="'+letter+'">'
    + letter + ': '
    + questions[i].answers[letter]
    + '</label>'
    );
    }
    
    // agregue esta pregunta y sus respuestas a la salida 
    output.push(
    '<div class="question">' + questions[i].question + '</div>'
    + '<div class="answers">' + answers.join('') + '</div>'
    );
    }
    
    // finalmente combine nuestra lista de salida en una cadena de html y colóquela en la página 
    quizContainer.innerHTML = output.join('');
    }
    
    
    function showResults(questions, quizContainer, resultsContainer){
    
    // reunir contenedores de respuesta de nuestro cuestionario 
    var answerContainers = quizContainer.querySelectorAll('.answers');
    
    // realizar un seguimiento de las respuestas del usuario 
    var userAnswer = '';
    var numCorrect = 0;
    
    // para cada pregunta... 
    for(var i=0; i<questions.length; i++){
    
    // encontrar la respuesta seleccionada 
    userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
    
    // if answer is correct
    if(userAnswer===questions[i].correctAnswer){
    // si la respuesta es correcta 
    numCorrect++;
    
    // colorea las respuestas de verde 
    answerContainers[i].style.color = 'lightgreen';
    }
    // si la respuesta es incorrecta o está en blanco 
    else{
    // color the answers red
    answerContainers[i].style.color = 'red';
    }
    }
    
    // mostrar el número de respuestas correctas del total 
    resultsContainer.innerHTML = numCorrect + ' de ' + questions.length;
    }
    
    // mostrar preguntas de inmediato 
    showQuestions(questions, quizContainer);
    
    // al enviar, mostrar resultados 
    submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
    }
    
    }




