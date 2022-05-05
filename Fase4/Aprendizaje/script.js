var myQuestions = [
    {
    question: "1- Los encabezados se denotan con la etiqueta &lt;h&gt; y hay hasta 7 niveles en HTML5, desde h1a h7 dónde h1 es el de nivel más importante y h7 el que menos",
    answers: {
    a: 'Verdadero',
    b: 'Falso',
    },
    correctAnswer: 'b'
    },
    {
    question: "2- Cualquiera que conozca algo de HTML4 u otra versión anterior ya estará familiarizado con la etiqueta párrafo. Los párrafos son bloques de texto qué más aparecen en los documentos web. ¿Para agrupar el texto en párrafos, se utilizan las etiquetas &lt;p&gt;?.",
    answers: {
    a: 'Verdadero',
    b: 'Falso',
    },
    correctAnswer: 'a'
    },
    {
    question: "3- ¿La etiqueta de párrafo &lt;p&gt; tiene etiqueta de cierre.?",
    answers:{
    a:'Verdadero',
    b:'Falso',
    },
    correctAnswer: 'a'
    },
    {
    question: "4- ¿HTML5 y los navegadores tienen en cuenta los saltos de línea con (intro).",
    answers:{
    a: 'Verdadero',
    b: 'Falso',
    },
    correctAnswer: 'b'
    },
    {
    question: "5- ¿La etiqueta &lt;br&gt; tiene etiqueta de cierre?",
    answers:{
    a: 'Verdadedro',
    b: 'Falso',
    },
    correctAnswer: 'b'
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