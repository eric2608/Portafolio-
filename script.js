	

 
	document.querySelectorAll('.card1').forEach( item =>{
 		item.addEventListener('click', () => {
		   
		  // Toggle classes
		  item.classList.toggle('flipped');
		  item.classList.toggle('greenletters');
  
		  // Change inner HTML based on current content
		  if (item.innerHTML === '<img class="htmlIcon" src="images/Html icon.jpg" alt="HTML Icon">') {
			  item.innerHTML = '<h2>Abilities</h2><div class=""><h3>HTML</h3> <ul> <li>HTML CODING</li> </ul> </div> <div class="iconHtml"> </div>';
		  } else {
			  item.innerHTML = '<img class="htmlIcon" src="images/Html icon.jpg" alt="HTML Icon">';
		  }
		 
		});
		
	});





	document.querySelectorAll('.card2').forEach( item =>{
		item.addEventListener('click', () => {
		   
		  // Toggle classes
		  item.classList.toggle('flipped');
		  item.classList.toggle('greenletters');
  
		  // Change inner HTML based on current content
		  if (item.innerHTML === '<img class="htmlIcon" src="images/CSS.png" alt="HTML Icon">') {
			  item.innerHTML = '<h2>CSS </h2><div class=""><h3></h3><ul><li></li></ul></div>';
		  } else {
			  item.innerHTML = '<img class="htmlIcon" src="images/CSS.png" alt="HTML Icon">';
		  }
		 
		});
		
	});


	document.querySelectorAll('.card3').forEach( item =>{
		item.addEventListener('click', () => {
		   
		  // Toggle classes
		  item.classList.toggle('flipped');
		  item.classList.toggle('greenletters');
  
		  // Change inner HTML based on current content
		  if (item.innerHTML === '<img class="htmlIcon" src="images/js.jpg" alt="HTML Icon">') {
			  item.innerHTML = ' <h2>JAVASCRIPT</h2> <div class=""> <h3></h3> <ul> <li></li> </ul></div>';
		  } else {
			  item.innerHTML = '<img class="htmlIcon" src="images/js.jpg" alt="HTML Icon">';
		  }
		 
		});
		
	});

	document.querySelectorAll('.card4').forEach( item =>{
		item.addEventListener('click', () => {
		   
		  // Toggle classes
		  item.classList.toggle('flipped');
		  item.classList.toggle('greenletters');
  
		  // Change inner HTML based on current content
		  if (item.innerHTML === '<img class="htmlIcon" src="images/Bootstrap.png" alt="HTML Icon">') {
			  item.innerHTML = '<h2>BOOTSTRAP</h2><div class="">  <h3></h3><ul> <li></li> </ul></div>';
		  } else {
			  item.innerHTML = '<img class="htmlIcon" src="images/Bootstrap.png" alt="HTML Icon">';
		  }
		 
		});
		
	});





	