import React from 'react';
import '../pages/dashboard.css';
import Icon from '../assests/Icon.png';
import notification from "../assests/notification.png";
import profilepicture from '../assests/profilepicture.png';
import leading from '../assests/leading.png';
import galleryicon from '../assests/galleryicon.png';
import Document from '../assests/Document.png';
import chat from '../assests/chat.png';
import Setting from '../assests/Setting.png';
import Vector from '../assests/Vector.png';
import files from '../assests/files.png';
import mask from '../assests/mask.png';
import piechart from '../assests/piechart.png';
import week from '../assests/week.png';
import donut from '../assests/donut.png';
import graph from '../assests/graph.png';
import filesicon from '../assests/filesicon.png';
import { Link } from 'react-router-dom';
import logs from '../assests/logs.png';
import ApexCharts from 'react-apexcharts';
import { Options } from "apexcharts";
import { useEffect, useRef } from 'react';
import cardmain from '../assests/cardmain.svg';
import home from '../assests/home.svg';
import home3 from '../assests/home3.svg';


function Dashboard() {

  const chartOptions = {
    chart: {
      width: 380,
      type: 'donut', // Donut chart type
    },
    dataLabels: {
      enabled: false, // Disable data labels
    },
    plotOptions: {
      pie: {
        customScale: 1,
        expandOnClick: false,
        donut: {
          size: '80%', // Define the size of the donut hole
        },
      },
    },
    legend: {
      position: 'right',
      verticalAlign: 'center',
      containerMargin: {
        left: 35,
        right: 60,
      },
    },
    series: [66, 55, 13, 33], // Data points
    labels: ['Asia', 'USA', 'China', 'Africa'], // Labels for each slice
    colors: ['#00ab5599', '#00ab55', '#00ab5535', '#00ab5550'], // Colors for each slice
    donut: {
      size: '100%', // Full donut size
    },
    responsive: [
      {
        breakpoint: 1550,
        options: {
          chart: {
            width: 340, // Adjust chart width for smaller screens
          },
          legend: {
            position: 'bottom',
            verticalAlign: 'bottom',
            containerMargin: {
              left: 'auto',
              right: 'auto',
            },
          },
        },
      },
      {
        breakpoint: 1450,
        options: {
          chart: {
            width: 300, // Adjust chart width for smaller screens
          },
        },
      },
    ],
  };


  useEffect(() => {
    const ctx2 = document.querySelector(".chart-line");

    if (ctx2) {
      // Check if a chart is already created on this canvas
      if (window.chartInstance) {
        window.chartInstance.destroy(); // Destroy the previous chart instance
      }

      // Create a new chart
      window.chartInstance = new Chart(ctx2, {
        type: "line",
        data: {
          labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [
            {
              label: "Black Friday",
              tension: 0.4,
              borderWidth: 3,
              pointRadius: 0,
              borderColor: "#00ab55",
              backgroundColor: "transparent",
              data: [20, 60, 20, 50, 90, 220, 440, 380, 500],
              maxBarThickness: 6,
            },
            {
              label: "Autumn Sale",
              tension: 0.4,
              borderWidth: 3,
              pointRadius: 0,
              borderColor: "#212b36",
              backgroundColor: "transparent",
              data: [30, 90, 40, 140, 290, 290, 240, 270, 230],
              maxBarThickness: 6,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
          tooltips: {
            enabled: true,
            mode: "index",
            intersect: false,
          },
          scales: {
            y: {
              grid: {
                borderDash: [2],
                borderDashOffset: [2],
                color: '#dee2e6',
                zeroLineColor: '#dee2e6',
                zeroLineWidth: 1,
                zeroLineBorderDash: [2],
                drawBorder: false,
              },
              ticks: {
                suggestedMin: 0,
                suggestedMax: 500,
                beginAtZero: true,
                padding: 10,
                fontSize: 11,
                fontColor: '#adb5bd',
                lineHeight: 3,
                fontStyle: 'normal',
                fontFamily: "Public Sans",
              },
            },
            x: {
              grid: {
                zeroLineColor: 'rgba(0,0,0,0)',
                display: false,
              },
              ticks: {
                padding: 10,
                fontSize: 11,
                fontColor: '#adb5bd',
                lineHeight: 3,
                fontStyle: 'normal',
                fontFamily: "Public Sans",
              },
            },
          },
        },
      });
    }

    return () => {
      if (window.chartInstance) {
        window.chartInstance.destroy();
      }
    };
  }, []);



  return (
    <>
      {/* <section className='header'>
        <nav className="navbar navbar-expand-lg bg-white rounded shadow">
          <div className="container-fluid">
            <img src={Icon} alt="icon" />
            <a className="navbar-brand" href="#">AProjectO</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#sidebar"
              aria-controls="sidebar"
              aria-expanded="false"
              aria-label="Toggle sidebar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
              <form className="input-form d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search For Anything...."
                  aria-label="Search"
                />
                <img src={notification} alt="icon" />
              </form>
              <div className="profile-text">
                <span>Anima Agarwal</span>
                <h6>Up, India</h6>
              </div>
              <div className="profile-image">
                <img src={profilepicture} alt="icon" />
              </div>
            </div>
          </div>
        </nav>

      </section> */}
      <section className='work-info-sec'>
        <div className='container-fluid'>
          <div className="row">
            <div className="work-info-main col-md-2 shadow collapse" id="sidebar">
              <div className="work-info-text">
                <img src={home3} alt="icon" style={{ marginLeft: '7px' }} />

                <Link to="/dashboard">
                  <span style={{ color: 'black', marginLeft: '7px' }}>Home</span>
                </Link>
              </div>
              <div className="work-info-text">
                <img src={leading} alt="icon" />
                <Link to="/projects">
                  <span style={{ color: 'black' }}>projects</span>
                </Link>
              </div>
              <div className="work-info-text">
                <img src={galleryicon} alt="icon" />
                <Link to="/task">
                  <span style={{ color: 'black' }}>Tasks</span>
                </Link>
              </div>
              <div className="work-info-text">
                <img src={logs} alt="icon" />
                <Link to="/worklog">
                  <span style={{ color: 'black' }}>Worklogs</span>
                </Link>
              </div>
              <div className="work-info-text">
                <img src={chat} alt="icon" />
                <Link to="/user">
                  <span style={{ color: 'black' }}>performance</span>
                </Link>
              </div>
              <div className="work-info-text">
                <img src={leading} className="settings-icon" alt="icon" />
                <span>Settings</span>
              </div>
            </div>

            <div className="dashboard-sec col-md-10">
              <div className="container">
                <div className="dashboard-row">
                  <div className="dashboard-text mt-3">
                    <span>Dashboard</span>
                  </div>
                  <div className="dashboard-img mt-3">
                    <img src={Vector} className="setting-icon" alt="icon" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5 mb-1">
                    <div className="card">
                      <div className="card-body">
                        <div className="card-title-container">
                          <h5 className="card-title">Projects</h5>
                          <div className="image-andtext">
                            <img src={filesicon} alt="icon" className="card-icon" />
                            <span>52 Files</span>
                          </div>
                        </div>

                        <img src={cardmain} className="img-fluid h-auto" alt="icon" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 mb-2">
                    <div className="card">
                      <div className="card-body">
                        <div className="card-title-container">
                          <h5 className="card-title">Tasks</h5>
                          <div className="btn-group">
                            <div className="dropdown">
                              <button className="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                This week
                              </button>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="col-12 col-md-12 col-lg-12 d-flex justify-content-center">
                            <div className="card mb-4 z-index-2 draggable border-0" style={{ maxWidth: "100%", overflow: "hidden" }}>

                              <div className="card-body card-body px-3 pt-lg-6 pb-lg-5">
                                <div className="row h-100">
                                  <div className="col-12 my-auto text-center d-flex justify-content-center">
                                    <div id="chart-pie">
                                      <ApexCharts
                                        options={chartOptions}
                                        series={chartOptions.series}
                                        type="donut"
                                        width="390px"
                                        height="auto"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <div className="container">
                            <div className="row">
                              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                <div className="products d-flex">
                                  <div className="red-product"></div>
                                  <span className="product1">Product1</span>
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                <div className="products d-flex">
                                  <div className="orange-product"></div>
                                  <span className="product1">Product1</span>
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                <div className="products d-flex">
                                  <div className="yellow-product"></div>
                                  <span className="product1">Product1</span>
                                </div>
                              </div>

                              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                <div className="products d-flex">
                                  <div className="green-product"></div>
                                  <span className="product1">Product1</span>
                                </div>
                              </div>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5 mb-2">
                    <div className="card">
                      <div className="card-body">
                        <div className="card-title-container">
                          <h5 className="card-title">Work Log</h5>
                          <div className="btn-group">
                            <div className="dropdown">
                              <button className="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                This week
                              </button>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="col-12 col-md-12 col-lg-12 d-flex justify-content-center">
                            <div className="card mb-4 z-index-2 draggable border-0" style={{ maxWidth: "100%", overflow: "hidden" }}>

                              <div className="card-body card-body px-3 pt-lg-6 pb-lg-5">
                                <div className="row h-100">
                                  <div className="col-12 my-auto text-center d-flex justify-content-center">
                                    <div id="chart-pie">
                                      <ApexCharts
                                        options={chartOptions}
                                        series={chartOptions.series}
                                        type="donut"
                                        width="390px"
                                        height="auto"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <div className="container">
                            <div className="row">
                              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                <div className="products d-flex">
                                  <div className="red-product"></div>
                                  <span className="product1">Product1</span>
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                <div className="products d-flex">
                                  <div className="orange-product"></div>
                                  <span className="product1">Product1</span>
                                </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                <div className="products d-flex">
                                  <div className="yellow-product"></div>
                                  <span className="product1">Product1</span>
                                </div>
                              </div>

                              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                <div className="products d-flex">
                                  <div className="green-product"></div>
                                  <span className="product1">Product1</span>
                                </div>
                              </div>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 mb-2">
                    <div className="card">
                      <div className="card-body">
                        <div className="card-title-container">
                          <h5 className="card-title">Projects</h5>
                          <div className="btn-group">
                            <div className="dropdown">
                              <button className="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                This week
                              </button>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="chart-image col-md-12">
                          <div className="card mb-4 draggable border-0">
                            {/* <div className="card-header pb-0 d-flex align-items-center">
                                                    <div>
                                                        <h6 className="mb-1">Sales overview</h6>
                                                        <p className="text-sm mb-0">(+32%) more in 2021</p>
                                                    </div>
                                                    <select
                                                        className="form-select form-select-sm ms-auto w-20 font-weight-bolder bg-gray-100"
                                                        aria-label=".form-select-sm example"
                                                    >
                                                        <option selected>2021</option>
                                                        <option value="2020">2020</option>
                                                    </select>
                                                </div> */}
                            <div className="card-body p-3">
                              <div className="chart">
                                <canvas className="chart-line" height="300"></canvas>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}

export default Dashboard;
