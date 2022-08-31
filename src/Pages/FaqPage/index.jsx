import React from "react";
import Accordian from "./Accordian";

const FaqPage = () => {
    return (
        <div className="page-faqs">
            <div className="faqs__heading">
                Frequently Asked Questions
            </div>

            {/* Getting Started  */}
            <div class="faqs-sec" id="Section6">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 offset-lg-1">
                            <div class="faqs-main">
                                <div class="accordion" id="accordionExample">
                                    <Accordian
                                        key="0"
                                        title="What is Metaglonex?"
                                        content="Metaglonex is a Global Company with Many Investors and Entrepreneurs around the World. 
Metaglonex or LCFX was Developed by a Team of Professionals Who Ran a Hedge Fund in Europe."
                                    />
                                    <Accordian
                                        key="1"
                                        title="Where is Metaglonex located?"
                                        content="Metaglonex is Headquartred in Nantes, France, and also has offices in several countries including Dubai, UAE and South Africa."
                                    />
                                    <Accordian
                                        key="2"
                                        title="How does LCFX work?"
                                        content='Using a concept known as "arbitrage", LCFX hedge fund professionals place hundreds of trades each day making micro profits with our high-speed algorithms. The profitable trades add up to many hundreds of thousands of dollars during each trading session. Cryptocurrency arbitrage is no different. In fact, it is easier than the forex markets to make these kinds of trades.'
                                    />
                                    <Accordian
                                        key="3"
                                        title="How much can I earn with LCFX?"
                                        content='From Monday to Friday, individual profit packages can earn up to 2.5% of their value, daily.

Profit Package 1 - can make up to 1.5%
Profit Package 2 - can make up to 2.0%
Profit Package 3 - can make up to 2.5%
There is no "compounding" of earnings. It is mathematically impossible to pay investors 1% compounded everyday in perpetuity or even over an extended amount of time. What makes Metaglonex exceptional is their full compensation structure where you can receive bonuses for referring other investors who simply wish to receive a steady income through daily passive profits.'
                                    />
                                    <Accordian
                                        key="4"
                                        title="Is Metaglonex legitimate?"
                                        content="Yes, LCFX is legit and ran by a team of professionals with over 150 years combined experience in hedge fund management and securities trading.  Our Mission is completely different from other programs online:

We will provide the ordinary investor a safe place to increase their BTC holdings in an affordable manner."
                                    />
                                    <Accordian
                                        key="5"
                                        title="What are the minimum and maximum investments?"
                                        content="The Minimum Investment Is $100. The Maximum Investment Is $50,000."
                                    />
                                    <Accordian
                                        key="6"
                                        title="What are the minimum and maximum withdrawals?"
                                        content="The Minimum Withdrawal Is $20 and There Is No Maximum Withdrawal...

Withdrawals Are Processed On Mondays Through Fridays.
Please allow 1 to 3 Business Days to Process Your Withdrawal Requests. 

Remember, the BTC blockchain is a global ledger that we do not control. Some transactions may take much longer to process than others"
                                    />
                                    <Accordian
                                        key="7"
                                        title="Am I required to refer others to get paid?"
                                        content="No. You have the option to simply receive up to 2.5% daily returns on your investment without referring anyone."
                                    />
                                    <Accordian
                                        key="8"
                                        title="How do I receive the Binary Bonus?"
                                        content="Upon your purchase of a Profit Package, credit points are created. To Receive A Binary Bonus:
Purchase your own profit package amount for passive income. You must refer at least 2 others (1 on each leg) who also have an active investment package. 

Points are tallied, weekly,  based on the total amounts of the package investments of your entire organization.  Your percentage bonus commission is calculated on the smaller of the two legs under you.

Please refer to the full compensation structure document for more information."
                                    />
                                    <Accordian
                                        key="9"
                                        title="What is the risk of investing with LCFX?"
                                        content="The Number One Risk in life is not taking this calculated risk and build the lifestyle that you deserve! You will be kicking yourself 3 months from now if you do not take action and invest today.

However, there is inherent risk in all investments anywhere in the world. Nothing Is 100% Guaranteed in life, in any investment or in any opportunity.

We recommend that you first look to your leadership for success. Follow their lead and build your LCFX business accordingly. All successful people in business and in trading accepted risk and took immediate action. This is why they are successful."
                                    />
                                    <Accordian
                                        key="10"
                                        title="Can I take my daily profits and use them to invest in another Profit Package?"
                                        content="No. All withdrawable funds can only be moved to your own personal wallets. If you wish to purchase a profit package, you must complete the transaction via your personal external wallet address. "
                                    />


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default FaqPage;