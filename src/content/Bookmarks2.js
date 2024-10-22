import React from 'react'
import CodeBlock from '../components/CodeBlock'
import Framework from '../components/icons/Framework'
import Tools from '../components/icons/Tools'
import Package from '../components/icons/Package'
import DesignIdeas from '../components/icons/DesignIdeas'
import Animation from '../components/icons/DesignIdeas'


function Bookmarks2() {

    const packages = [
        { name: 'Prism JS', url: 'https://www.npmjs.com/package/prismjs' },
        { name: 'Swiper JS', url: 'https://swiperjs.com/' },
        { name: 'React Slick', url: 'https://react-slick.neostack.com/' },
        { name: 'Vaul', url: 'https://github.com/emilkowalski/vaul' },
        { name: 'Sonner', url: 'https://sonner.emilkowal.ski/' },
        { name: 'React Dropzone', url: 'https://react-dropzone.js.org/' },
        { name: 'React Whatsapp', url: 'https://www.npmjs.com/package/react-whatsapp' },
        { name: 'React Drag and Drop', url: 'https://react-dnd.github.io/react-dnd/examples/sortable/simple' },
        { name: 'DND Kit (Drag and Drop)', url: 'https://dndkit.com/' },
        { name: 'Send email', url: 'https://react.email/' },
        { name: 'Resend', url: 'https://resend.com/' }

    ];


    const designIdeas = [
        { name: 'Fillo Agency', url: 'https://www.instagram.com/filllo_agency/' },
        { name: 'UntitledUI', url: 'https://www.untitledui.com/components/portfolio-mockups' },
        { name: 'PracticalUi by Adham', url: 'https://www.practical-ui.com/' },
        { name: 'UntitledUI', url: 'https://www.untitledui.com/components/portfolio-mockups' }
        
    ];

    const tools = [
        { name: 'Converting Colors', url: 'https://convertingcolors.com/rgb-color-248_250_252.html' },
        { name: 'Pesticide', url: 'https://chromewebstore.google.com/detail/pesticide-for-chrome/bakpbgckdnepkmkeaiomhmfcnejndkbi/reviews?pli=1' },
        { name:'React Router 6 Lazy Loading', url:'https://www.robinwieruch.de/react-router-lazy-loading/'},
        { name:'Chalkboard', url:'https://mychalkboard.github.io/'},
        { name:'Dummy Image', url:'https://dummyimage.com/'},
        { name:'Dummy Image: Picsum', url:'https://picsum.photos/'},
        { name:'Free JSON API: Chuck Norris Jokes', url:'https://api.chucknorris.io/'},
        { name: 'Wireframe: Mockflow', url:'https://mockflow.com/'},
        { name: 'Framer Motion', url: 'https://www.framer.com/motion/animation/' }
    ];

    const developers = [
        { name: 'Web Dev Simplified', url: 'https://www.youtube.com/watch?v=lVLz_ASqAio' },
        { name: 'Tom on the Internet', url: 'https://www.youtube.com/watch?v=Ki64Cnyf_cA&t=30s' },
        { name: 'ByteGrad', url: 'https://www.youtube.com/watch?v=5r25Y9Vg2P4&t=5500s' },
        { name: 'Code Bootcamp', url: 'https://www.youtube.com/watch?v=wIyHSOugGGw&t=14s' },
        { name: 'Cosden Solutions', url: 'https://www.youtube.com/watch?v=_QpTQrxzY8A' },
        { name: 'James Q Quick', url:'https://www.youtube.com/watch?v=i8yxx6V9UdM'},
        { name: 'ByteByteGo', url:'  https://www.youtube.com/@ByteByteGo'}
      
    ];


    const Section = ({ title, icon: Icon, items }) => (
        <ul className=''>
            <p className='p-2 text-xl font-bold flex gap-2 items-center'><Icon />{title}</p>
            {items.map((item, index) => (
               <a target="_blank" href={item.url}>
               <li key={index} className='p-2  hover:bg-primary-500 rounded-lg cursor-pointer'>
               {item.name}
             </li>
             </a>
            ))}
        </ul>
    );


    return (

        <div>
            <div class="grid grid-col-4 grid-flow-col gap-4 ">

                <div className="grid grid-col-4 grid-flow-col gap-4">
                    <Section title="PACKAGE" icon={Package} items={packages} />
                    <Section title="DESIGN IDEAS" icon={DesignIdeas} items={designIdeas} />
                    <Section title="TOOLS" icon={Tools} items={tools} />
                    <Section title="ANIMATION" icon={Animation} items={developers} />
                    
                </div>

            </div>

        </div>
    )
}

export default Bookmarks2