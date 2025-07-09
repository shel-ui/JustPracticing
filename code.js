const button = document.getElementById('addBtn'); //we just basically call the objects in our web
        const inputField = document.getElementById('mainInput');
        let container = [];

        function displayTask() {
            const inputField = document.getElementById('mainInput'); /*input*/
            const tasksDiv = document.getElementById('tasks');
            let createNewTask = document.createElement('p'); //gumawa new paragraph element
            let inp = inputField.value; //eto ininput ni user sa input field

            if (inp) {
                container.push(inp);
                createNewTask.textContent = inp;
                createNewTask.classList.add('createdTaskDesign');
                tasksDiv.appendChild(createNewTask);
                inputField.value = "";
                //added:
                createNewTask.addEventListener('click', function() {
                    createNewTask.classList.toggle('completed');
                });

                 createNewTask.addEventListener('touchstart', function(e) {
                    e.preventDefault();
                    createNewTask.classList.toggle('completed');
                }, {passive: false});
            }

            createNewTask.textContent = inp;
            tasksDiv.appendChild(paraG);
            //added:
            tasksDiv.appendChild(createNewTask);
            inputField.value = "";

        }
        
        inputField.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                displayTask(); // call the function to create the task
            }
        });

        button.addEventListener("click", displayTask);