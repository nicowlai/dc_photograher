import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const imageAssets = import.meta.glob('../assets/*', { eager: true, query: '?url', import: 'default' });
const imageUrlsByFilename = Object.fromEntries(
    Object.entries(imageAssets).map(([path, url]) => [path.split('/').pop(), url])
);

export default function PhotosGallery() {
    const [open, setOpen] = useState(false); // lightbox function
    const [index, setIndex] = useState(0); // check which image is selected

    // Part 1: created an array to store all of the images
    // creates rows 
    const rows = [
        {
            rowId: "row-1",
            position: 1, 
            images: [
            {id: "1", position: 1, aspect:"4/3", url:"vogue models near south street seaport (1)_result.webp", desc: "New York models walking on the street"},
            {id: "2", position: 3,aspect:"3/4",url:"washington square park astrolita arch (1 of 1).webp", desc: "Model in Washington Sqaure Park"},
            {id: "3", position: 2, aspect:"3/4",url:"DarthCornelius4491--0023_23_result.webp", desc: "New Yorkers posing on the street"},
            ]
        },
        {
            rowId: "row-2",
            position: 2,
            //maxWidth: "81%",
            images: [
                { id: "4", position: 1, aspect:"3/4", url:"Busted 3_result.webp", desc: "Lady in black latex"},
                { id: "5", position: 2,aspect:"3/4",  url:"07_fashion.webp", desc: "B&W of a latino couple"},
                { id: "6", position: 3,aspect:"3/4",  url:"DarthCornelius4490--0013_13_result.webp", desc: "Girl in pink coat"},
            ]
        },
        {
            rowId: "row-3",
            position: 3,
            images: [
                { id: "7", position: 1,aspect:"3/4",  url:"Elijah_and_Brother_42nd_street_B&H_result.webp", desc: "Brothers"},
                { id: "8", position: 2, aspect:"4/3",  url:"Broadway Brooklyn New York colourful flags 2022-.webp", desc: "Broadway St in Brooklyn"},
                { id: "9", position: 3,aspect:"3/4",  url:"DarthCornelius4484--0035_34A_result.webp", desc: "Black dude  with tatto"},
            ]
        },
        {
            rowId: "row-4",
            position: 4,
            //maxWidth: "81%",
            images: [
                { id: "10", position: 1,aspect:"4/3", url:"DarthCornelius4482--0035_33_result.webp", desc: "Two police offiers"},
                { id: "11", position: 2,aspect:"4/3", url:"Single speed Boba fett venice beach-26_result.webp", desc: "Speed Boba Fett"},
            ]
        },
        {
            rowId: "row-5",
            position: 5,
            images: [
                { id: "14", position: 1, aspect:"3/4",  url:"Walgreens New Orleans_result.webp", desc: "Walgreen"},
                { id: "15", position: 2,aspect:"4/3", url:"Hussle - Louisiana streets_result.webp", desc: "Louisiana Nightlife"}, 
                { id: "16", position: 3, aspect:"3/4", url:"DarthCornelius4495--0027_result.webp", desc: "Apollo neon sign"},
            ]
        },
        {
            rowId: "row-6",
            position: 6,
            //maxWidth: "81%",
            images: [
                { id: "17", position: 1,aspect:"4/3", url:"Looks like SHoegaze_result.webp", desc: "Shoegaze"},
                { id: "18", position: 2,aspect:"4/3", url:"07_landscape.webp", desc: "Flashing Light"},
            ]
        },
        {
            rowId: "row-7",
            position: 12,
            //maxWidth: "81%",
            images: [
                { id: "19", position: 1, aspect:"3/4",  url:"Puk for tama extra contrast magenta tint sat boost 1 pt_result.webp", desc: "Puk for tama"},
                { id: "20", position: 2, aspect:"3/4",  url:"Wayno_result.webp", desc: "Wayno"},
            ]
        },
        {
            rowId: "row-8",
            position: 7,
            images: [
                { id: "21", position: 1,aspect:"3/4", url:"02_landscape.webp", desc: "Bus"},
                { id: "22", position: 2,aspect:"4/3", url:"Raureka Church behind the glass (1 of 1)_result.webp", desc: "Raureka Church"},
                { id: "23", position: 3,aspect:"3/4", url:"Waiapu St MAts insta_result.webp", desc: "Waiapu St Mats"},
            ]
        },
        {
            rowId: "row-9",
            position: 8,
            //maxWidth: "100%", // narrow this row
            images: [
                { id: "24", position: 1,aspect:"4/3", url:"DarthCornelius760--0014_result.webp", desc: "B&W rural road"},
                { id: "25", position: 2,aspect:"4/3", url:"flight arthur ashe stadium 1_result.webp", desc: "B&W Pyrmaid"},
                { id: "26", position: 3,aspect:"4/3", url:"Cornelius_Darth_06_AvondaleBeforeGentrification_result.webp", desc: "backyard Auckland"},
            ]
        },
        {
            rowId: "row-10",
            position: 9,
            images: [
                { id: "27", position: 2,aspect:"4/3", url:"us open 2022 arthur ashe stadium (1 of 1)_result.webp", desc: "US opening Arthur Ashe"},
                { id: "28", position: 1, aspect:"3/4",  url:"the getty museum 2022 black -22 exp +0.76 (1 of 1)_result.webp", desc: "Getty Pyrmaid"},
                { id: "29", position: 3,aspect:"3/4",  url:"F1870012_result.webp", desc: "Desert"},
            ]
        },
        {
            rowId: "row-11",
            position: 10,
            //maxWidth: "81%",
            images: [
                { id: "30", position: 1,aspect:"4/3", url:"MOMA reflection flipped(1)(1)_result.webp", desc: "MOMA reflection"},
                { id: "31", position: 2,aspect:"4/3",url:"MOMA reflection inside_result.webp", desc: "MOMA reflection inside"},
            ]
        },
        {
            rowId: "row-12",
            position: 11,
            //maxWidth: "81%",
            images: [
                { id: "32", position: 1, aspect:"3/4",  url:"DarthCorne001543--0000181659068777411_result.webp", desc: "Man in hunting gear"},
                { id: "33", position: 2, aspect:"3/4",  url:"CHe Full Length w dog_result.webp", desc: "Man with dog"},
            ]
        },
        {
            rowId: "row-13",
            position: 13,
            //maxWidth: "81%",
            images: [
                { id: "34", position: 1, aspect:"3/4",  url:"20250430_185728_result.webp", desc: "Man in a sunflower field"},
                { id: "35", position: 2, aspect:"3/4",  url:"20231214_103846_result.webp", desc: "Egirl"},
                { id: "36", position: 3, aspect:"3/4",  url:"Ari Abdul Fairfax print.webp", desc: "Ari"},
            ]
        },
        {
            rowId: "row-14",
            position: 14,
            //maxWidth: "81%",
            images: [
                { id: "37", position: 1, aspect:"3/4",  url:"DarthCornelius3689--0013_13_result.webp", desc: "Birds"},
                { id: "38", position: 2, aspect:"4/3", url:"Venice Parrot reflection-4_result.webp", desc: "Man with Bird"},
            ]
        },
    ];

    //Part 2: sort by data from rows position by top to bottom 
    const sortedRows = [...rows].sort((a, b) => a.position - b.position);

    // Part 4: create a slider for the light box feature
    const slides = sortedRows.flatMap(row => {
    const sortedImgs = [...row.images].sort((a, b) => a.position - b.position)
    return sortedImgs.map(image => ({
        src: imageUrlsByFilename[image.url],
        alt: image.desc,
        })) 
    })

    //Part 3: return to displayed images on the webpage
    return (
        <>
            {/* outer container */}
            <div style={{ maxWidth: '100%', margin: '0 auto', padding: '10px 0', boxSizing: 'border-box' }}>
                {sortedRows.map((row) => {
                    // sort each single img inside the row from left to right
                    const sortedImgs = [...row.images].sort((a, b) => a.position - b.position);

                    // a row with maxWidth is narrowed + centered, and its images
                    // scale to fit (so the narrower width is actually visible)
                    const isNarrow = !!row.maxWidth;

                    return (
                        <div // row container
                            key={row.rowId}
                            style={{
                                display: 'flex',
                                gap: '20px',
                                //width: '100%',
                                maxWidth: row.maxWidth || '100%',
                                margin: '0 auto 20px', // last value = gap below each row
                                justifyContent: 'center',
                                alignItems: 'center',
                                boxSizing: 'border-box',
                                paddingLeft: '100px',
                                paddingRight: '100px', 

                            }}
                        >
                            {sortedImgs.map((image) => (
                                <div // images container
                                    key={image.id}
                                    className="gallery-img"
                                    style={{
                                        flex: isNarrow ? '1 1 0' : '0 1 auto',
                                        minWidth: isNarrow ? 0 : undefined,
                                        aspectRatio: image.aspect,
                                        overflow: 'hidden',
                                        height: isNarrow ? 'auto' : '40vh',
                                        maxHeight: '100vh',
                                        backgroundColor: '#444444',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <img // image
                                        src={imageUrlsByFilename[image.url]}
                                        alt={image.desc}
                                        loading="lazy"
                                        onClick={() => {
                                        setIndex(slides.findIndex(s => s.src === imageUrlsByFilename[image.url]));
                                        setOpen(true);
                                        }}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            display: 'block',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                index={index}
                setIndex={setIndex}
                styles={{
                    container: { backgroundColor: "rgba(0, 0, 0, 0.7)"}
                }}
            />
        </>
    );
}
