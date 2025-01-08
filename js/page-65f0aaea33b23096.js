(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], {
    7914: function(e, t, s) {
        Promise.resolve().then(s.t.bind(s, 413, 23)),
        Promise.resolve().then(s.t.bind(s, 8326, 23)),
        Promise.resolve().then(s.t.bind(s, 9167, 23)),
        Promise.resolve().then(s.bind(s, 2124)),
        Promise.resolve().then(s.bind(s, 3178)),
        Promise.resolve().then(s.bind(s, 4354))
    },
    2124: function(e, t, s) {
        "use strict";
        s.r(t);
        var r = s(7437)
          , n = s(2265)
          , i = s(8065)
          , a = s(6892);
        t.default = () => {
            let[e,t] = (0,
            n.useState)(!1);
            return ((0,
            n.useEffect)( () => {
                t(!0)
            }
            , []),
            e) ? (0,
            r.jsx)("div", {
                className: "p5-animation-container",
                children: (0,
                r.jsx)(i.g, {
                    sketch: e => {
                        let t = [];
                        e.setup = () => {
                            e.createCanvas(4e3, 4e3);
                            let s = e.createVector(e.width / 2, e.height / 2);
                            !function(s) {
                                t = [];
                                let r = e.width / 2 / 32
                                  , n = e.height / 2 / 32
                                  , i = (e.width - e.width / 2) / 2
                                  , a = (e.height - e.width / 2) / 2;
                                for (let l = 0; l < 32; l++)
                                    for (let o = 0; o < 32; o++) {
                                        let c = l * r + r / 2 + i
                                          , h = o * n + n / 2 + a;
                                        t.push(new Dot(e,c,h,s))
                                    }
                            }(s)
                        }
                        ,
                        e.draw = () => {
                            e.clear(),
                            t.forEach(e => {
                                e.move(),
                                e.display()
                            }
                            )
                        }
                        ;
                        let Dot = class Dot {
                            move() {
                                this.center && this.p && (this.a = a.Vector.sub(this.center, this.p),
                                this.a.setMag(.01),
                                this.v.add(this.a),
                                this.p.add(this.v))
                            }
                            display() {
                                this.p5.fill(255),
                                this.p5.noStroke(),
                                this.p5.circle(this.p.x, this.p.y, 2)
                            }
                            constructor(e, t, s, r) {
                                this.p5 = e,
                                this.p = this.p5.createVector(t, s),
                                this.v = this.p5.createVector(),
                                this.a = this.p5.createVector(0, .1),
                                this.center = r
                            }
                        }
                    }
                })
            }) : null
        }
    },
    3178: function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, {
            Hero: function() {
                return Hero
            }
        });
        var r = s(7437)
          , n = s(2265);
        s(5925);
        var i = s(5761);
        function Hero() {
            let[e,t] = (0,
            n.useState)("")
              , [s,a] = (0,
            n.useState)(!1);
            return (0,
            r.jsx)(i.W2, {
                className: "relative hero-section",
                children: (0,
                r.jsx)(i.kC, {
                    className: "justify-center items-center min-h-[72vh]",
                    children: (0,
                    r.jsxs)(i.Ht, {
                        className: "w-full max-w-2xl text-center",
                        children: [(0,
                        r.jsx)("div", {
                            className: "text-5xl font-light w-full justify-center",
                            style: {
                                color: "#FFFFFF"
                            },
                            children: "Verifiable Agents for Any Task"
                        }), (0,
                        r.jsxs)("p", {
                            style: {
                                color: "#FFFFFF",
                                width: "100%",
                                maxWidth: "650px",
                                whiteSpace: "normal",
                                display: "flex",
                                flexDirection: "column",
                                gap: "0rem"
                            },
                            className: "mt-8 text-l font-extralight break-words mobile-spacing-description",
                            children: [(0,
                            r.jsx)("span", {
                                children: "Create smart web3 systems by just stating your intent. Axal powers agentic"
                            }), (0,
                            r.jsx)("span", {
                                children: "markets that find optimal solutions with zero counterparty risk."
                            })]
                        }), " ", (0,
                        r.jsxs)("p", {
                            style: {
                                color: "#FFFFFF",
                                width: "100%",
                                maxWidth: "650px",
                                whiteSpace: "normal",
                                display: "flex",
                                flexDirection: "column",
                                gap: "0rem"
                            },
                            className: "mt-8 text-l font-semibold break-words mobile-spacing-description",
                            children: [(0,
                            r.jsx)("span", {
                                children: "Autopilot simplifies onchain trading through intelligent agents that automate and optimize decisions"
                            }), (0,
                            r.jsx)("span", {})]
                        }), " ", (0,
                        r.jsx)(i.kC, {
                            className: "mt-8 w-full justify-center",
                            children: (0,
                            r.jsxs)("form", {
                                className: "flex gap-2 w-full max-w-sm justify-center",
                                children: [" ", (0,
                                r.jsx)("button", {
                                    className: "px-2 py-1 bg-black text-xs font-normal text-gray-400 border border-gray-400 rounded-none whitespace-nowrap hover:bg-white hover:text-black transition-colors duration-300",
                                    type: "button",
                                    onClick: () => window.open("https://forms.gle/4jKs3MhESMXFhKKfA", "_blank"),
                                    children: "Join"
                                })]
                            })
                        }), "        "]
                    })
                })
            })
        }
    },
    4354: function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, {
            HeroMobile: function() {
                return HeroMobile
            }
        });
        var r = s(7437)
          , n = s(2265)
          , i = s(5925)
          , a = s(5761);
        function HeroMobile() {
            let[e,t] = (0,
            n.useState)("")
              , [s,l] = (0,
            n.useState)(!1)
              , handleSubmit = async s => {
                if (s.preventDefault(),
                l(!0),
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) {
                    i.toast.error("Please enter a valid email address"),
                    l(!1);
                    return
                }
                try {
                    let s = await fetch("/api/addEmail", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: e
                        })
                    });
                    if (s.ok)
                        i.toast.success("Thank you for joining our mailing list!"),
                        t("");
                    else {
                        let e = await s.json();
                        i.toast.error("Error was: " + e.error)
                    }
                } catch (e) {
                    console.error("Error submitting form:", e),
                    i.toast.error("An error occurred. Please try again later.")
                } finally {
                    l(!1)
                }
            }
            ;
            return (0,
            r.jsx)(a.W2, {
                className: "relative hero-section",
                children: (0,
                r.jsx)(a.kC, {
                    className: "justify-center items-center",
                    children: (0,
                    r.jsxs)(a.Ht, {
                        className: "text-center",
                        children: [(0,
                        r.jsx)("div", {
                            className: "text-xl font-light w-full justify-center",
                            style: {
                                color: "#FFFFFF"
                            },
                            children: "Verifiable Agents"
                        }), (0,
                        r.jsxs)("p", {
                            style: {
                                color: "#FFFFFF",
                                width: "100%",
                                maxWidth: "650px",
                                whiteSpace: "normal",
                                display: "flex",
                                flexDirection: "column",
                                gap: "0rem"
                            },
                            className: "mt-12 text-xs font-light break-words",
                            children: [(0,
                            r.jsx)("span", {
                                children: "Axal is a network for verifiable autonomous agents."
                            }), (0,
                            r.jsx)("span", {
                                children: "Create agent-powered, verifiable web3 systems by"
                            }), (0,
                            r.jsx)("span", {
                                children: "just stating your intent."
                            })]
                        }), (0,
                        r.jsxs)("p", {
                            style: {
                                color: "#FFFFFF",
                                width: "100%",
                                maxWidth: "650px",
                                whiteSpace: "normal",
                                display: "flex",
                                flexDirection: "column",
                                gap: "0rem"
                            },
                            className: "mt-4 text-xs font-semibold break-words",
                            children: [(0,
                            r.jsx)("span", {
                                children: "Autopilot streamlines onchain"
                            }), (0,
                            r.jsx)("span", {
                                children: "trading with smart agents."
                            })]
                        }), (0,
                        r.jsx)(a.kC, {
                            className: "mt-4 w-full justify-center",
                            children: (0,
                            r.jsx)("form", {
                                onSubmit: handleSubmit,
                                className: "flex gap-2 w-full max-w-sm justify-center",
                                children: (0,
                                r.jsx)("button", {
                                    className: "px-2 py-1 bg-black text-xs font-normal text-gray-400 border border-gray-400 rounded-none whitespace-nowrap hover:bg-white hover:text-black transition-colors duration-300",
                                    type: "button",
                                    onClick: () => window.open("https://autopilot.getaxal.com", "_blank"),
                                    children: "Launch Autopilot"
                                })
                            })
                        }), (0,
                        r.jsx)(a.kC, {
                            className: "mt-4 w-full justify-center",
                            children: (0,
                            r.jsx)("form", {
                                onSubmit: handleSubmit,
                                className: "flex gap-2 w-full max-w-sm justify-center",
                                children: (0,
                                r.jsx)("button", {
                                    className: "px-2 py-1 bg-black text-xs font-normal text-gray-400 border border-gray-400 rounded-none whitespace-nowrap hover:bg-white hover:text-black transition-colors duration-300",
                                    type: "button",
                                    onClick: () => window.open("https://forms.gle/4jKs3MhESMXFhKKfA", "_blank"),
                                    children: "Mailing List"
                                })
                            })
                        })]
                    })
                })
            })
        }
    },
    5761: function(e, t, s) {
        "use strict";
        s.d(t, {
            W2: function() {
                return l
            },
            kC: function() {
                return o
            },
            Ht: function() {
                return c
            }
        });
        var r = s(7437)
          , n = s(2265)
          , i = s(4440)
          , a = s.n(i);
        let l = n.forwardRef( (e, t) => {
            let {className: s, ...n} = e;
            return (0,
            r.jsx)("div", {
                ref: t,
                className: a()(s, "container mx-auto max-w-screen-xl"),
                ...n
            })
        }
        );
        l.displayName = "Container";
        let o = n.forwardRef( (e, t) => {
            let {className: s, as: r="div", ...i} = e;
            return n.createElement(r, {
                ref: t,
                className: a()(s, "flex"),
                ...i
            })
        }
        );
        o.displayName = "Flex";
        let c = n.forwardRef( (e, t) => {
            let {className: s, ...n} = e;
            return (0,
            r.jsx)("div", {
                ref: t,
                className: a()(s, "flex flex-col items-start"),
                ...n
            })
        }
        );
        c.displayName = "FlexCol"
    }
}, function(e) {
    e.O(0, [226, 754, 971, 472, 744], function() {
        return e(e.s = 7914)
    }),
    _N_E = e.O()
}
]);
