async function getUserData(username) {
    var spinner = document.getElementById('spinner');
    spinner.classList.add('spinner');
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      const userData = await response.json();

      // Handle the data as needed
      console.log(userData);
      var userRepo = document.getElementById('userRepo');

      userData.forEach(function(item) {
        var newDiv = document.createElement('div');
        newDiv.id = 'myDynamicDiv';
        //newDiv.textContent = item.name;
        //newDiv.textContent = item.description;
        //newDiv.innerHTML = `<p>${item.name}</p>`
        newDiv.innerHTML = '<p>' + item.name + '</p>' +
         '<p>' +item.description + '</p>'+
         '<p>' + item.language + '</p>'+ 
         '<p>' + item.created_at + '</p>';


        userRepo.appendChild(newDiv);
      });


    } catch (error) {
      console.error('Error fetching data:', error);
    }

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const userData = await response.json();
  
        var infopart = document.getElementById('infoPart');
        infopart.innerHTML = '<p>' + userData.name + '</p>' +
        '<p>' +'@'+userData.login + '</p>'+   
        '<p>' +userData.bio + '</p>'+
        '<p>' +'Followers -  '+ userData.followers + '</p>'+ 
        '<p>' + userData.created_at + '</p>'+ 
        '<p>' + "Follow" + '</p>';
  
        var imageElement = document.getElementById('photocircle');
        imageElement.src = userData.avatar_url;
  

       


      } catch (error) {
        console.error('Error fetching data:', error);
      }
  }

