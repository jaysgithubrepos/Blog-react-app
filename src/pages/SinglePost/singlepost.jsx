import './singlepost.css';
import SinglePost from './pexels-joshua-woroniecki-12790371.jpg';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function singlepost() {
  return (
    <div className="single-post">
        <div className="sinlepost-wrapper">
            <img className="single-post-image" src={SinglePost} alt="singlepost"></img>
            <h1 className="singleposttitle">Mountains are great To visit
            <div className='singlepostEdit'>
            <EditIcon className="icon editcicon"/>
            <DeleteIcon className='icon deleteicon'/>
            </div>
            
            </h1>
            <div className="writer-name">
                <span className="singlepost-authorname">Author: <b>Jaichand Yadav</b></span>
                <span className="singlepost-date">2 DAYS Ago</span>
                


            </div>
            <p className='singlepostdescription'>Nothing comes close to the kind of breathtaking view you experience when you are on top of a mountain. All you mountain lovers will agree with us on this! There are a lot of mountain places in India that are just perfect and give you your Insta-worthy clicks. Be it capturing the picturesque mountain views or one with you in it, India has some of the best mountain places that are worth visiting. You might have to trek or hike for a while till you get there, but when you do, it’s totally worth it.

            From Kerala to Uttarakhand, the list of mountain places in India is endless. A lot of mountain ranges in the country don’t really require you to trek all the way up. You can also use local transport like auto, car or a cable car to reach the top. Check out some of these mountain places in India that make for a picture perfect vacation.

            Munnar is famous for its tea plantation and is also one of the most popularly visited hill stations in the country. Adventure activities, waterfalls, wildlife sanctuaries, there are a lot of reasons why you must visit Munnar at least once in your life. It is undoubtedly one of the most picturesque mountain places in India. Be it with your friends, family, partner or a solo trip, Munnar has something beautiful in store for all of its tourists. Kerala is called God's Own Country for a reason, and Munnar is one of them. You can go rock climbing, explore the tea plantation estates, watch and learn kalaripayattu, pamper yourself with a rejuvenating massage, go camping, the list of things to do in Munnar keeps going on.</p>
            
    

        </div>
        
        </div>
  )
}

export default singlepost