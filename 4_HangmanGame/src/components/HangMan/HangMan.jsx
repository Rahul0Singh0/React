import Level1 from '../../assets/Images/1.png';
import Level2 from '../../assets/Images/2.png';
import Level3 from '../../assets/Images/3.png';
import Level4 from '../../assets/Images/4.png';
import Level5 from '../../assets/Images/5.png';
import Level6 from '../../assets/Images/6.png';
import Level7 from '../../assets/Images/7.png';
import Level8 from '../../assets/Images/8.png';

function HangMan({ step }) {
    const images = [ Level1, Level2, Level3, Level4, Level5, Level6, Level7, Level8 ];

    return (
        <div className='w-[400px] h-[350px]'>
            <img 
                src={step >= images.length ? images[images.length - 1] : images[step]}
            />
        </div>
    );
}

export default HangMan;