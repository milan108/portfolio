import React from 'react';
import './Sections.scss';
import Slide from 'react-reveal/Slide';
import img_algo from '../../assets/images/repos/algorithms.png';
import img_payme from '../../assets/images/repos/payme.png';
import img_bank from '../../assets/images/repos/bank-nothing.png';
import img_libgdx from '../../assets/images/repos/libgdx.png';
import RepoCard from '../Cards/RepoCard';

const RepoSection = props => {
    return (
        <div className='RepoSection' id="Repos">
            <h1>REPOSITORIES</h1>
            <Slide bottom>
                <div className="row-lg RepoCards">
                    <RepoCard image = {img_algo} title = "Algorithms" description = "An collection of algorithms written in whatever language I please." url = "https://github.com/milan108/Algorithms" />
                    <RepoCard image = {img_payme} title = "PayMe" description = "Stripe payment integration sample." url = "https://github.com/milan108/pay-me" />
                    <RepoCard image = {img_libgdx} title = "LibGDX Sampler" description = "A desktop sampler that allows me to quite easily test individual components of a libgdx program." url = "https://github.com/milan108/Algorithms/libgdx-sampler" />
                    <RepoCard image = {img_bank} title = "Bank Nothing" description = "A mock banking app in early stages with a simple crypto implementaion." url = "https://github.com/milan108/bank-nothing" />
                    
               
                </div>
            </Slide>
        </div>
    );
};

export default RepoSection;