// main div1

    // var topstories = document.createElement("div")
    // topstories.setAttribute("id","topstories")

    topstories.innerText= "SOUTH, POLITICS"
    heading = document.createElement("h1")
    heading.innerText="Police detain Bandi Sanjay in Jangaon district"

    para = document.createElement("p")
    para.innerText="DECCAN CHRONICLE. | NARENDER PULLOOR"
    para.innerText="PublishedAug 24, 2022, 12:05 am IST"
    para.innerText="UpdatedAug 24, 2022, 6:36 am IST"

    var image1 = document.createElement("img")
    image1.src="https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-8clogihjipbrgohjojhue1piv5-20220823133908.jpeg";
    para.innerText=" Bandi Sanjay "
    para1 = document.createElement("p")
    para1.innerText="The BJP leader was participating in a protest programme at Station Ghanpur in Jangaon district"
    para1.style.fontSize="25px";
    para2 = document.createElement("p")
    para2.innerText="Leaders close to Mr Azad claim that he will soon be starting his own outfit in Jammu and Kashmir before the proposed Assembly elections in the state. Five former MLAs of the party from J&K quit the Congress in support of Mr Azad. Sources say he is keen on a new outfit on his home turf, and also wants to be a force in the coming Assembly elections. Many more leaders of the Congress are likely to go with Mr Azad, leaving the grand old party in disarray in the state."
    para2.style.fontSize="22px";
    para3 = document.createElement("p")
    para3.innerText="The exit of Mr Azad comes as another major blow for the Congress. The last one year has seen major exits from the Congress, which include Kapil Sibal, Capt. Amarinder Singh, Ashwani Kumar, R.P.N. Singh, Jitin Prasada and Sunil Jakhar, among several other leaders."
    para3.style.fontSize="22px";
    para4 = document.createElement("p")
    para4.innerText="Although the Chief Minister's Office (CMO) did not disclose details about this meeting, officials sources said the Chief Minister made it clear that the government would never compromise on the law and order situation. He directed police officials to take stringent measures against those attempting to create law and order problems."
    para4.style.fontSize="22px";
    para5 = document.createElement("p")
    para5.innerText="The Chief Minister did not react publicly on Raja Singh and Bandi Sanjay's although ministers, TRS MLAs and other party leaders are lashing out at the BJP and accusing its leaders of trying to incite communal violence."
    para5.style.fontSize="22px";
    para6 = document.createElement("p")
    para6.innerText="After the meeting, Mahmood Ali issued a media statement on Wednesday stating that the Telangana government would adopt 'uncompromising policy' in maintaining law and order and no one would be spared if incited communal violence and disrupted law and order."
    para6.style.fontSize="22px";
    para7 = document.createElement("p")
    para7.innerText="The Telangana government will not tolerate anyone belittling other religions or hurt the religious sentiments of people with their comments and try to create unrest in the state. The state government will take stringent action against those as per law, he said."
    para7.style.fontSize="22px";
    para8 = document.createElement("p")
    para8.innerText="He added that several complaints were received in police stations across the state against Raja Singh for his objectionable remarks on the Prophet and the government would take action as per law."
    para8.style.fontSize="22px";
    para9 = document.createElement("p")
    para9.innerText="No one is above the law. The law will take its own course. Anyone indulging in such activities will be punished as per law irrespective of their caste, creed or religion, Mahmood Ali said."
    para9.style.fontSize="22px";
    para10 = document.createElement("p")
    para10.innerText="The home minister urged all to maintain restraint and safeguard 'Ganga Jamuna Tehzeeb' (fusion of Hindu-Muslim cultures) and not to take law into their hands."
    para10.style.fontSize="22px";
    para11 = document.createElement("p")
    para11.innerText="Tags: telangana politics, telangana news, telangana chief minister k. chandrashekar rao, telangana rashtra samithi (trs), telangana bjp, bandi sanjay, bjp mla raja singh,Location: India, Telangana"
    para11.style.fontSize="18px".color="red";
    para11.style.color="red";
    
    topstories.append(heading,para,image1,para,para1,para2,para3,para4,para5,para6,para7,para8,para9,para10,para11)
    document.getElementById("main").append(topstories);

// main div2
    
    var obj =[
    {
        para : "Monkeys that snatched inspector's cap and magistrate's eyeglasses",
        imgulr : "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-lc2rkhvf7hc4m197h5bjlun5t6-20220823184011.jpeg",
    },
    {
        para : "Monkeys that snatched inspector's cap and magistrate's eyeglasses",
        imgulr : "https://dc-cdn.s3-ap-southeast-1.amazonaws.com/dc-Cover-dthp0dge55uosa84aak9cqh3h7-20161005091059.jpeg",
    },
    {
        para : "Monkeys that snatched inspector's cap and magistrate's eyeglasses",
        imgulr : "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-mltv306fpap0vvppb3pci8n071-20191225111756.jpeg",
    },
    {
        para : "Monkeys that snatched inspector's cap and magistrate's eyeglasses",
        imgulr : "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-i2cvpjuh9hoj5pgej18hltqtm5-20220722163323.jpeg",
    },
    {
        para : "Monkeys that snatched inspector's cap and magistrate's eyeglasses",
        imgulr : "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-vas3e9jhabjlq920pbde5dc632-20211130113854.jpeg",
    },
    {
        para : "Monkeys that snatched inspector's cap and magistrate's eyeglasses",
        imgulr : "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/c54036d054c7c8253415ffcdfe34e2a9058cc7a4-tc-img-thumb.jpg",
    },
    {
        para : "Monkeys that snatched inspector's cap and magistrate's eyeglasses",
        imgulr : "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-lc2rkhvf7hc4m197h5bjlun5t6-20220823184011.jpeg",
    },
    {
        para : "Monkeys that snatched inspector's cap and magistrate's eyeglasses",
        imgulr : "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-iftbfkthce95mmc63kt17gcul6-20220813115854.jpeg",
    }]
    // var mostpopular = document.createElement("div")
    // mostpopular.setAttribute("id","mostpopular")
    // mostpopular.innerText="MOST POPULAR"

    obj.map(function (elem){
        var div1 = document.createElement("div")

        var para1 = document.createElement("p")
        para1.innerText=elem.para;

        var image1 = document.createElement("img")
        image1.setAttribute("src",elem.imgulr);

        var hr = document.createElement("hr")
    



    div1.append(para1,image1);
    document.getElementById("mostpopular").append(div1)
    

    mostpopular.append(div1)
    document.getElementById("main").append(mostpopular)
});

function show(){
    document.getElementById('sidebar').classList.toggle('active');
  }