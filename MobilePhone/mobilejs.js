	

	var visible=0;
	var screen = document.querySelectorAll('.displayblock');
	var query = document.querySelector('#query');
	var ans = document.querySelector('#ans');
	var appStack = [screen[visible]]
	var allApps = document.querySelectorAll('.app')
	var Doc = document.querySelector('.Doc')
	var DocContent = document.querySelector('.DocContent')

	//-----------------------------------------------------------------------------------------------------------------------------------------------
	//home icon
	function slideShow(shiftBy=0){
		visible += shiftBy;
		if(visible<0){
			visible=screen.length-1;
		}
		if(visible>=screen.length){
			visible = 0;
		}
		screen.forEach( function(element,index) {
			element.style.display = 'none'
		});
		screen[visible].style.display = 'block'
		appStack[0] = screen[visible];
	}
	slideShow();
	//--------------------------------------------------------------------------------------------------------------------------------------------



	//--------------------------------------------------------------------------------------------------------------------------------------------
	//Doc
	document.querySelector('.line').addEventListener('click',()=>{
		if(screen[visible].style.display == 'block'){
			screen[visible].style.display = 'none'
			document.querySelector('.line').setAttribute('class',"line fa fa-angle-down")
			// Doc.style.height = '40%'
			Doc.style.bottom = '80px'
			DocContent.style.height = '100px'
			DocContent.style.opacity = '1'
		}else{
			document.querySelector('.line').setAttribute('class',"line fa fa-angle-up")
			screen[visible].style.display = 'block'
			Doc.style.bottom = '0px'
			DocContent.style.height = '0%'
			DocContent.style.opacity = '0'
			
		}
	})
	//--------------------------------------------------------------------------------------------------------------------------------------------

	//----------------------------------------------------------------------------------------
	//cal
	document.querySelector('.icon').addEventListener('click',()=>{
		document.querySelector('.Calcontainer').style.display = 'block'
		appStack.push(document.querySelector('.Calcontainer'))
		screen[visible].style.display = 'none'
		Doc.style.display = 'none'
	})
	var queryUpdate = (x)=>{
		var data = query.value;
		
		if(x=='X'){
			query.value = data.substring(0,data.length-1);
		}else if(x=='AC'){
			query.value = "";
		}
		else{
			query.value += x;
		}
		solveQuery();
	}
	var solveQuery = ()=>{
		try{
			ans.textContent = eval(query.value)
		}
		catch(err){
			ans.textContent = ' '
		}
	}
	//--------------------------------------------------------------------------------

	// back home button
	document.querySelector('.back').addEventListener('click',()=>{
		if(appStack.length>1){
			appStack[appStack.length-1].style.display = 'none'
			appStack.pop()
			appStack[appStack.length-1].style.display = 'block'
			if(appStack.length==1){
				Doc.style.display = 'block'
			}
		}
	})
	document.querySelector('.home').addEventListener('click',()=>{
		screen[visible].style.display = 'none'
		visible=0;
		screen[visible].style.display = 'block'
	})