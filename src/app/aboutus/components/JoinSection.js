'use client'
import React from 'react'

export default function JoinSection() {
    return (
      <div className="py-24 px-6 text-center bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-3xl mx-auto">
          <p className="text-2xl text-gray-600 mb-2">Ready to</p>
          <h2 className="text-4xl font-bold text-primary mb-8">JOIN RAAHA</h2>
          <p className="text-gray-600 text-lg mb-12 leading-relaxed">
            Join our network of mental health professionals and help make quality care accessible across India. Be part of the change - sign up today!
          </p>
          <button className="bg-secondary hover:bg-secondary-dark text-white px-12 py-4 rounded-full text-lg font-medium transition-colors duration-300">
            JOIN NOW
          </button>
        </div>
      </div>
    )
  }