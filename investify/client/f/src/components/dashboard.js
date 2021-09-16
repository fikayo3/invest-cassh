function Dashboard(){
    return (
        <div className = "wrapper">

        <aside>
            <div class="sidebar">
            <ul>
                <li>
                       <a href="#" class="nav-link">
                        <img src="assets/home.svg"></img>
                        <h class="item">Dashboard</h>
                        </a>
                </li>
                <li>
                    <a href="#" class="nav-link">
                    <img src="assets/investment.svg" ></img>
                        <h class="item">investments</h>
                        </a>
                </li>
                <li>
                   <a href="#" class="nav-link">
                    <img src="assets/invest.svg" ></img>
                        <h class="item">invest</h>
                        </a>
                </li>
                <li>
                   <a href="#" class="nav-link">
                       <img src="assets/profile.svg"></img>
                        <h class="item">profile</h>
                        </a>
                </li>
                <li id="last-item">
                    <a href="#" class="nav-link">
                       <img src="assets/logout.svg" ></img>
                        <h class="item">Logout</h>
                    </a>
                </li>
            </ul>
            </div>
            </aside>
        <div id="center">

            <div class="container">

            <div id="admin-header-content">
            <div class="row">
            <div class="col-md-9">
            <div class="heading">
            Dashboard
            </div>
             <div class="sub-heading">Welcome Back!</div>
            </div>
            <div class="col-md-3 hide-in-mobile invest">
            <a><button id="btn"> create an Investment</button></a>
            </div>
            </div>
            </div>

            <main id="main">
            <div id="dashboard">
            <div class="container">
            <div class="stats">
                <div class="row">
                    <div class="col-md-4">
                    <div class="stat-card">
                            <div class="left"><div>₦</div></div>
                            <div class="right">
                                <div class="number">0.00</div>
                                <div class="title">Total Profits</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="stat-card">
                            <div class="left"><div>₦</div></div>
                            <div class="right">
                                <div class="number">0.00</div>
                                <div class="title">Total Profits</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="stat-card">
                            <div class="left"><div>₦</div></div>
                            <div class="right">
                                <div class="number">0.00</div>
                                <div class="title">Expected Returns</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="recent">
            <div class="heading">
             Recent Investment
            </div>
            <div class="list-empty">
            <img id="info" src="assets/info.svg"></img>
            <span class="message">You have no investment</span>
            </div>
            </div>
            </div>
           </div>
           </main>

            </div>


            <aside id="r-side">
            <div id="r-side-content">
            <div class="profile">
                <div class="left">
                    <div class="greeting">Hello,</div>
                    <div class="name">fikayo</div>
                </div>
                <div class="avatar">
                    <img src="assets/profile.svg"></img>
                </div>
            </div>
            <div class="side-image">
            <img id="sideimg" src="assets/support.svg"></img>
            </div>
        <div class="help">
            Question or need help? 
            Email us at <a href="mail:info@ablecash.com.ng">info@ablecash.com.ng</a> or call us <a href="tel:08133277050">08133277050</a> or  <a href="tel:09034876658">09034876658</a>. we will bw happy to assist you
        </div>
    </div>
</aside>

    </div>
        
   
        </div>

    )
}

export default Dashboard