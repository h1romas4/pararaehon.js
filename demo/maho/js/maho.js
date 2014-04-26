/**
 * バッタになりたい魔法使い.
 *
 * @author komomo and hiromasa
 * @version 1.0
 */
new PararaEhon.Scene({
    id : 'parara',
    width: 960,
    height: 600,
    book : [
        /**
         * Page 01
         */
        {
             bg: {
                 image: 'images/page01/01_bg.png',
                 fixed: true
             },
             wizard: {
                 image: 'images/page01/01_m.png',
                 x: 50,
                 y: 25
             },
             title: {
                 image: 'images/page01/01_title.png',
                 x: 244,
                 y: 137
             }
        },
        /**
         * Page 02
         */
        {
             bg: {
                 image: 'images/page02/02_bg.png',
                 fixed: true
             },
             cloud: {
                 image: 'images/page02/02_cloud.png',
                 x: 142,
                 y: 20
             },
             hitsuji01: {
                 image: 'images/page02/02_hitsuji01.png',
                 x: 15,
                 //y: 320,
                 start: 200,
                 update: function() {
                     this.y = 600 + (1 - Math.exp(-6 * (this.tick / 60))) * -280;
                     if(this.tick > 60) this.complete = true;
                 }
             },
             hitsuji02: {
                 image: 'images/page02/02_hitsuji02.png',
                 x: 247,
                 // y: 342,
                 start: 200,
                 update: function() {
                     this.y = 622 + (1 - Math.exp(-6 * (this.tick / 60))) * -360;
                     if(this.tick > 14) this.complete = true;
                 }
             },
             heart: {
                 image: 'images/common/heart.png',
                 // x: 222,
                 // y: 280,
                 start: 200,
                 update: function() {
                     if(this.tick < 32) {
                         this.y = 600;
                     } else if(this.tick >= 32) {
                         var ti = (this.tick - 32) / 60;
                         this.y = 300 + (1 - Math.exp(-6 * ti)) * -50;
                         this.x = 222;
                     }
                     if(this.tick > 92) this.complete = true;
                 }
             },
             wizard: {
                 image: 'images/common/wizard.png',
                 x: 661,
                 y: 39,
                 update: function() {
                 }
             },
             text01: {
                 image: 'images/page02/02_txt01.png',
                 x: 164,
                 y: 108,
                 start: 200,
                 update: function() {
                     this.effectFeedIn(60, 30);
                 }
             },
             text02: {
                 image: 'images/page02/02_txt02.png',
                 x: 535,
                 y: 420,
                 start: 200,
                 update: function() {
                     this.effectFeedIn(60, 30);
                 }
             }
        },
        /**
         * Page 03
         */
        {
             wizard_bg: {
                 image: 'images/page03/03_m.png',
                 fixed: true,
                 // y: -80,
                 start: 300,
                 update: function() {
                     this.y = this.tick * 8 - 300;
                     if(this.tick > 28) this.complete = true;
                 }
             },
             light_bg: {
                 image: 'images/page03/03_light.png',
                 fixed: true,
                 //y:-300,
                 start: 300,
                 update: function() {
                     this.y = -(this.tick * 10);
                     if(this.tick > 28) this.complete = true;
                 }
             },
             star01: {
                 image: 'images/page03/03_star01.png',
                 x: 60,
                 y: 0,
                 start: 400,
                 update: function() {
                     this.effectFeedIn(120);
                 }
             },
             star02: {
                 image: 'images/page03/03_star02.png',
                 x: 60,
                 y: 0,
                 start: 400,
                 update: function() {
                     this.effectFeedIn(60);
                 }
             },
             text01: {
                 image: 'images/page03/03_txt01.png',
                 x: 60,
                 y: 90,
                 start: 200,
                 update: function() {
                     this.effectFeedIn(60, 30);
                 }
             }
        },
        /**
         * Page 04
         */
        {
            bg01: {
                image: 'images/page04/04_bg01.png',
                fixed: true,
                // y: -100,
                y: -200,
                start: 200,
                update: function() {
                    this.y = this.tick * 8 - 200;
                    if(this.tick > 20) this.complete = true;
                }
            },
            bg02: {
                image: 'images/page04/04_bg02.png',
                fixed: true,
                // y: 300,
                y: 400,
                start: 200,
                update: function() {
                    this.y = 800 - this.tick * 10;
                    if(this.tick > 49) this.complete = true;
                }
            },
            gh01: {
                image: 'images/page04/04_gh01.png',
                x: 160,
                //y: 366,
                start: 200,
                update: function() {
                    this.y = 866 - this.tick * 10;
                    if(this.tick > 49) this.complete = true;
                }
            },
            gh02: {
                image: 'images/page04/04_gh02.png',
                x: 365,
                //y: 366,
                start: 200,
                update: function() {
                    this.y = 866 - this.tick * 10;
                    if(this.tick > 49) this.complete = true;
                }
            },
            heart: {
                image: 'images/common/heart.png',
                // x: 330,
                // y: 320,
                start: 200,
                update: function() {
                    if(this.tick < 50) {
                        this.y = 600;
                    } else if(this.tick >= 50) {
                        var ti = (this.tick - 50) / 60;
                        this.y = 320 + (1 - Math.exp(-6 * ti)) * -50;
                        this.x = 330;
                    }
                    if(this.tick > 120) this.complete = true;
                }
            },
            text01: {
                image: 'images/page04/04_txt01.png',
                x: 10,
                y: 125,
                start: 200,
                update: function() {
                    this.effectFeedIn(60, 30);
                }
            }
        },
        /**
         * Page 05
         */
        {
            background: {
                image: 'images/page05/05_bg.png',
                fixed: true
            },
            cloud: {
                image: 'images/page05/05_cloud.png',
                x: 170,
                y: 20
            },
            duck01: {
                image: 'images/page05/05_duck01.png',
                x: 600,
                // y: 270,
                start: 200,
                update: function() {
                    this.y = 600 + (1 - Math.exp(-6 * (this.tick / 60))) * -330;
                    if(this.tick > 60) this.complete = true;
                }
            },
            duck02: {
                image: 'images/page05/05_duck02.png',
                x: 745,
                // y: 270,
                start: 200,
                update: function() {
                    this.y = 600 + (1 - Math.exp(-6 * (this.tick / 60))) * -330;
                    if(this.tick > 60) this.complete = true;
                }
            },
            heart: {
                image: 'images/common/heart.png',
                // x: 720,
                // y: 220,
                start: 200,
                update: function() {
                    if(this.tick < 30) {
                        this.y = 600;
                    } else if(this.tick >= 30) {
                        var ti = (this.tick - 30) / 60;
                        this.y = 220 + (1 - Math.exp(-6 * ti)) * -50;
                        this.x = 720;
                    }
                    if(this.tick > 120) this.complete = true;
                }
            },
            wizard: {
                image: 'images/common/wizard.png',
                x: 250,
                y: 40
            },
            text01: {
                image: 'images/page05/05_txt01.png',
                x: 440,
                y: 90,
                start: 200,
                update: function() {
                    this.effectFeedIn(60, 30);
                }
            }
        },
        /**
         * Page 06
         */
        {
             wizard_bg: {
                 image: 'images/page06/06_m.png',
                 fixed: true,
                 // y:-80,
                 start: 300,
                 update: function() {
                     this.y = this.tick * 8 - 300;
                     if(this.tick > 28) this.complete = true;
                 }
             },
             light_bg: {
                 image: 'images/page06/06_light.png',
                 fixed: true,
                 // y:-300,
                 start: 300,
                 update: function() {
                     this.y = -(this.tick * 10);
                     if(this.tick > 28) this.complete = true;
                 }
             },
             star01: {
                 image: 'images/page06/06_star01.png',
                 x: 250,
                 y: 0,
                 start: 400,
                 update: function() {
                     this.effectFeedIn(120);
                 }
             },
             star02: {
                 image: 'images/page06/06_star02.png',
                 x: 250,
                 y: 0,
                 start: 400,
                 update: function() {
                     this.effectFeedIn(60);
                 }
             },
             text01: {
                 image: 'images/page06/06_txt01.png',
                 x: 300,
                 y: 90,
                 start: 200,
                 update: function() {
                     this.effectFeedIn(60, 30);
                 }
             }
        },
        /**
         * Page 07
         */
        {
            bg01: {
                image: 'images/page07/07_bg01.png',
                fixed: true,
                // y: -50,
                start: 200,
                update: function() {
                    this.y = this.tick * 8 - 218;
                    if(this.tick > 20) this.complete = true;
                }
            },
            bg02: {
                image: 'images/page07/07_bg02.png',
                fixed: true,
                // y: 300,
                start: 200,
                update: function() {
                    this.y = 800 - this.tick * 10;
                    if(this.tick > 49) this.complete = true;
                }
            },
            gh01: {
                image: 'images/page07/07_gh01.png',
                x: 500,
                // y: 400,
                start: 200,
                update: function() {
                    this.y = 900 - this.tick * 10;
                    if(this.tick > 49) this.complete = true;
                }
            },
            gh02: {
                image: 'images/page07/07_gh02.png',
                x: 630,
                // y: 280,
                start: 200,
                update: function() {
                    this.y = 780 - this.tick * 10;
                    if(this.tick > 49) this.complete = true;
                }
            },
            heart: {
                image: 'images/common/heart.png',
                // x: 560,
                // y: 330,
                start: 200,
                update: function() {
                    if(this.tick < 50) {
                        this.y = 600;
                    } else if(this.tick >= 50) {
                        var ti = (this.tick - 50) / 60;
                        this.y = 330 + (1 - Math.exp(-6 * ti)) * -50;
                        this.x = 560;
                    }
                    if(this.tick > 120) this.complete = true;
                }
            },
            text01: {
                image: 'images/page07/07_txt01.png',
                x: 450,
                y: 130,
                start: 200,
                update: function() {
                    this.effectFeedIn(60, 30);
                }
            }
        },
        /**
         * Page 08
         */
        {
            bg: {
                image: 'images/page08/08_bg.png',
                fixed: true,
                // y: -200,
                start: 200,
                update: function() {
                    this.y = this.tick * 4 - 200;
                    if(this.tick > 51) this.complete = true;
                }
            },
            hill01: {
                image: 'images/page08/08_hill01.png',
                fixed: true,
                // y: 154,
                start: 200,
                update: function() {
                    this.y = 400 - this.tick * 4;
                    if(this.tick > 51) this.complete = true;
                }
            },
            hill02: {
                image: 'images/page08/08_hill02.png',
                fixed: true,
                //y: 109,
                start: 200,
                update: function() {
                    this.y = 320 - this.tick * 3;
                    if(this.tick > 70) this.complete = true;
                }
            },
            wizard: {
                image: 'images/page08/08_m.png',
                x: 42,
                y: 172
            },
            text01: {
                image: 'images/page08/08_txt01.png',
                x: 42,
                y: 36,
                start: 200,
                update: function() {
                    this.effectFeedIn(60, 30);
                }
            },
            text02: {
                image: 'images/page08/08_txt02.png',
                x: 430,
                y: 427,
                start: 200,
                update: function() {
                    this.effectFeedIn(60, 60);
                }
            }
        },
        /**
         * Page 09
         */
        {
            bg: {
                image: 'images/page09/09_bg.png',
                fixed: true
            },
            star: {
                image: 'images/page09/09_star.png',
                fixed: true,
                start: 200,
                update: function() {
                    this.y = this.tick * 8 - 200;
                    if(this.tick > 26) this.complete = true;
                }
            },
            wizard: {
                image: 'images/page09/09_m.png',
                x: 80,
                y: 135
            },
            ribon: {
                image: 'images/page09/09_ribon.png',
                x: 650,
                y: 47,
                start: 200,
                update: function() {
                    this.effectFeedIn(100, 0);
                }
            },
            text01: {
                image: 'images/page09/09_txt01.png',
                x: 60,
                y: 50,
                start: 200,
                update: function() {
                    this.effectFeedIn(60, 30);
                }
            }
        },
        /**
         * Page 10
         */
        {
            bg: {
                image: 'images/page10/10_bg.png',
                fixed: true
            },
            star: {
                image: 'images/page10/10_star.png',
                fixed: true
            },
            hill01: {
                image: 'images/page10/10_hill01.png',
                fixed: true,
                y: 156
            },
            hill02: {
                image: 'images/page10/10_hill02.png',
                fixed: true,
                y: 112
            },
            wizard: {
                image: 'images/page10/10_m.png',
                x: 267,
                y: 60
            },
            moon: {
                image: 'images/page10/10_moon.png',
                x: 680,
                // y: 55,
                start: 200,
                update: function() {
                    this.y = this.tick * 8 - 200;
                    if(this.tick > 31) this.complete = true;
                }
            },
            text01: {
                image: 'images/page10/10_txt01.png',
                x: 40,
                y: 50,
                start: 200,
                update: function() {
                    this.effectFeedIn(60, 30);
                }
            }
        },
        /**
         * Page 11
         */
        {
            bg: {
                image: 'images/page11/11_bg.png',
                fixed: true,
                start: 200,
                update: function() {
                    this.y = this.tick * 4 - 210;
                    if(this.tick > 28) this.complete = true;
                }
            },
            flower: {
                image: 'images/page11/11_flower.png',
                fixed: true,
                // y: 280
                start: 200,
                update: function() {
                    this.y = 600 - this.tick * 2;
                    if(this.tick > 159) this.complete = true;
                }
            },
            text01: {
                image: 'images/page11/11_txt01.png',
                x: 25,
                y: 40,
                start: 200,
                update: function() {
                    this.effectFeedIn(60, 30);
                }
            },
            text02: {
                image: 'images/page11/11_txt02.png',
                x: 660,
                y: 160,
                start: 200,
                update: function() {
                    this.effectFeedIn(60, 60);
                }
            }
        },
        /**
         * Page 12
         */
        {
            bg: {
                image: 'images/page12/12_bg.png',
                fixed: true
            },
            moon: {
                image: 'images/page12/12_moon.png',
                x: 738,
                y: 0
            },
            light: {
                image: 'images/page12/12_light.png',
                x: 213,
                y: 134,
                start: 200,
                update: function() {
                    this.effectFeedIn(100, 0);
                }
            },
            gh01: {
                image: 'images/page12/12_gh01.png',
                x: 310,
                y: 300,
                start: 200,
                update: function () {
                    if(this.tick < 120) {
                        this.alpha = 1;
                    } else {
                        this.alpha = (this.tick / (Math.ceil(this.tick / 60))) / 60 + 0.1;
                    }
                    if(this.tick > 480) this.complete = true;
                }
            },
            gh02: {
                image: 'images/page12/12_gh02.png',
                x: 0,
                y: 250,
                start: 200,
                update: function() {
                    if(this.tick < 120) {
                        this.alpha = 1;
                    } else {
                        this.alpha = (this.tick / (Math.ceil(this.tick / 60))) / 60 + 0.1;
                    }
                    if(this.tick > 480) this.complete = true;
                }
            },
            text01: {
                image: 'images/page12/12_txt01.png',
                x: 40,
                y: 60,
                start: 200,
                update: function() {
                    this.effectFeedIn(60, 30);
                }
            }
        },
        /**
         * Page 13
         */
        {
            bg: {
                image: 'images/page13/13_bg.png',
                fixed: true
            }
        },
        /**
         * Page 14
         */
        {
            bg: {
                image: 'images/page14/14_bg.png',
                fixed: true
            }
        }
    ]
}).start();
