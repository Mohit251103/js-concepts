
/*
              Engines of JS

    Compiler performs : 
        1. Lexical Analysis
        2. Syntax Analysis 
        3. Semantic Analysis
        4. Code Generation
        5. Optimization    
        
    While, Interpreter performs : 
        1. Lexical Analysis
        2. Syntax Analysis 
        3. Semantic Analysis

        ** Interpreter does not generate executable file due to missing intermediate compilation step

        ** As interpreter does not generate an executable file and execute the code on the go so it has to keep track of any variable or data structure that have been initialised in previous code blocks for smoot execution. But this is an overhead for interpreter.
        for ex. we have a code 

        let n = 10; // line 1
        console.log(a); // line 2
        
        Here interpreter will execute line 1 first and then move on to line 2. Now if it will not keep the track of variable 'a', it will lead to an unexpected behaviour.
        So to keep track of these variables, functions, classes etc. interpreter uses some data structures, which are obviously an overhead and in some cases lead to more time and space consumption as compared to compiler.

        This can be the reason why compiler is fast. But interpreter overs more interactive environment and also helps in debugging and all
        
        ** Modern JS Engines uses JIT to optimize the code before execution. It first interprets the code and then compile those parts which are used repeatedly.

    Lexical Analysis :- Breaking source code into small tokens where each token hold some meaning and specifying each token into 
            
 */

    console.log("Hello");
    for(var i = 0;i<4;i++) {
        console.log(Hello);
    }
    