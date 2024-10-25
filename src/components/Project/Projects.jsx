import { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { getImageUrl } from '../../utils';
import './Projects.css';

const images = [
    {
        url: getImageUrl(
            'proj/PROPOSED ONE STOREY FAMILY REST HOUSE (MEINERT RESIDENCE).jpg'
        ),
        text: 'Family Rest House - Meinert Residence',
    },
    {
        url: getImageUrl('proj/PROPOSED ONE STOREY RESIDENCE (BATAAN).jpg'),
        text: 'One Storey Residence - Bataan',
    },
    {
        url: getImageUrl('proj/PROPOSED THREE STOREY RESIDENCE.jpg'),
        text: 'Three Storey Residence',
    },
    {
        url: getImageUrl(
            'proj/PROPOSED TWO STOREY FAMILY REST HOUSE (RHEA SISTER).jpg'
        ),
        text: 'Family Rest House - Rhea Sister',
    },
    {
        url: getImageUrl('proj/PROPOSED TWO STOREY RESIDENCE (DASMA).jpg'),
        text: 'Two Storey Residence - Dasma',
    },
    {
        url: getImageUrl('proj/4 bedroom 1.png'),
        text: '4 Bedroom Design Front View',
    },
    {
        url: getImageUrl('proj/4 bedroom 2.png'),
        text: '4 Bedroom Design Back View',
    },
    { url: getImageUrl('proj/kiah residence.jpg'), text: 'Kiah Residence' },
    { url: getImageUrl('proj/1_1 - Photo.jpg'), text: 'Project 1_1' },
    { url: getImageUrl('proj/1_7 - Photo.jpg'), text: 'Project 1_7' },
    { url: getImageUrl('proj/1_Photo - 2.jpg'), text: 'Project 1 - Photo 2' },
    { url: getImageUrl('proj/1_Photo - 3.jpg'), text: 'Project 1 - Photo 3' },
    { url: getImageUrl('proj/1_Photo - 5.jpg'), text: 'Project 1 - Photo 5' },
    { url: getImageUrl('proj/1_Photo - 7.jpg'), text: 'Project 1 - Photo 7' },
    { url: getImageUrl('proj/1_Photo - 8.jpg'), text: 'Project 1 - Photo 8' },
    { url: getImageUrl('proj/1 (2).jpg'), text: 'Project 1 (2)' },
    { url: getImageUrl('proj/2_17 - Photo (2).jpg'), text: 'Project 2_17' },
    { url: getImageUrl('proj/2_20- Photo.jpg'), text: 'Project 2_20' },
    { url: getImageUrl('proj/3D PLAN.jpg'), text: '3D Plan' },
];

export const Projects = () => {
    const [data, setData] = useState({ img: '', text: '', i: 0 });

    const viewImage = (img, text, i) => {
        console.log(img, text);
        setData({ img, text, i });
    };

    const imgAction = (action) => {
        let i = data.i;
        if (action === 'next-img') {
            setData({
                img: images[i + 1]?.url || '',
                text: images[i + 1]?.text || '',
                i: i + 1,
            });
        }
        if (action === 'prev-img') {
            setData({
                img: images[i - 1]?.url || '',
                text: images[i - 1]?.text || '',
                i: i - 1,
            });
        }
        if (!action) {
            setData({ img: '', text: '', i: 0 });
        }
    };

    return (
        <div className="project-container">
            <h3 className="projects-title">Projects</h3>

            {data.img && (
                <div className="projects-overlay">
                    <button onClick={() => imgAction()} className="close-btn">
                        X
                    </button>
                    <button
                        onClick={() => imgAction('prev-img')}
                        className="prev-btn"
                    >
                        {'<'}
                    </button>
                    <img src={data.img} className="projects-image" alt="" />
                    <button
                        onClick={() => imgAction('next-img')}
                        className="next-btn"
                    >
                        {'>'}
                    </button>
                </div>
            )}

            <div className="grid">
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                    <Masonry columnsCount={3} gutter="20px">
                        {images.map((image, i) => (
                            <div key={i} className="image-container">
                                <img
                                    src={image.url}
                                    alt=""
                                    onClick={() =>
                                        viewImage(image.url, image.text, i)
                                    }
                                />
                                <span
                                    className="image-text"
                                    onClick={() =>
                                        viewImage(image.url, image.text, i)
                                    }
                                >
                                    {image.text}
                                </span>
                            </div>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </div>
    );
};

export default Projects;
