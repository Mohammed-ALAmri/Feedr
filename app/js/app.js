$(function(){
  newsApi()
})

function newsApi(){
  $("#loaddiv").show();
  $("#srs1").hide();
  $("#srs2").hide();
  $.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=897921539c3d4945b210fae5c722e6ad',
    function(res){
      document.querySelector("#source").innerHTML = "News API"
      res.articles.forEach(element => {

        let t = element.title
        if(t != null){
        t = t.replace("'","gggg")
        }
        let d = element.description
        if(d != null){
          d = d.replace("'","gggg")
        }
        let u = element.url
          $("#srs1").append(`
          <article class="article" onclick='popup("${t}","${d}","${u}")'>
            <section class="featuredImage">
              <img src="${element.urlToImage}" alt="" />
            </section>
            <section class="articleContent">
              <a href="#"><h3 id = "title">${element.title}</h3></a>
              <h6>${element.description}</h6>
            </section>
            <div class="clearfix"></div>
          </article>
          `)
      })
      $("#loaddiv").hide();
      $("#srs1").show();
    })
}

function nyt(){
  $("#loaddiv").show();
  $("#srs1").hide();
  $("#srs2").hide();
  $.get('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=u2NLMhQbaFe0yw18ZsBVdUP8rHTKau6H',
    function(res){
      document.querySelector("#source").innerHTML = "The New York Times"
      res.results.forEach(element => {
        console.log(element.media[0]['media-metadata'][2].url);
        
        let t = element.title
        if(t != null){
        t = t.replace("'","gggg")
        }
        let d = element.abstract
        if(d != null){
        d = d.replace("'","gggg")
        }
        let u = element.url
          $("#srs2").append(`
          <article class="article" onclick='popup("${t}","${d}","${u}")'>
            <section class="featuredImage">
              <img src="${element.media[0]['media-metadata'][2].url}" alt="" />
            </section>
            <section class="articleContent">
              <a href="#"><h3 id = "title">${element.title}</h3></a>
              <h6>${element.abstract}</h6>
            </section>
            <div class="clearfix"></div>
          </article>
          `)
      })
      $("#loaddiv").hide();
      $("#srs2").show();
    })
}

function popup(t,d,u){
  t = t.replace("gggg","'")
  d = d.replace("gggg","'")
  $("#popUp").append(`
    <div id="pop" class="container">  
    <h1>${t}</h1>
      <p>${d}</p>
      <a href="${u}" class="popUpAction" target="_blank">Read more from source</a>
    </div>`)


  $("#popUp").show()
  //})
}

function exit(){
  $("#pop").remove()
  $("#popUp").hide()
}