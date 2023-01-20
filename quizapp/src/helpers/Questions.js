
import React from 'react'

export const Questions = [
    
        {
        "id":5,
        "question":"What does the command top show?",
        "description":null,
        "answers":
        {
            "answer_a":"The space usage",
            "answer_b":"The memory usage",
            "answer_c":"The current processes alongside information about them",
            "answer_d":"Nothing, it's not a command"
        },
            "multiple_correct_answers":"false",
            "correct_answers":
            {
                "answer_a_correct":"false","answer_b_correct":"false","answer_c_correct":"true","answer_d_correct":"false"
            },
            "correct_answer":"answer_c",
            "tags":[{"name":"Linux"}],
            "category":"Linux",
            "difficulty":"Easy"
        },
        {"id":27,"question":"What is the most common procedure for compiling programs under Linux?","description":null,"answers":{"answer_a":"compile file_name","answer_b":"gcc file_name","answer_c":".\/configure && make && make install","answer_d":"make file_name"},"multiple_correct_answers":"false","correct_answers":{"answer_a_correct":"false","answer_b_correct":"false","answer_c_correct":"true","answer_d_correct":"false"},"correct_answer":"answer_c","tags":[{"name":"Linux"}],"category":"Linux","difficulty":"Medium"},{"id":40,"question":"What does the \/etc\/hosts file contains?","description":null,"answers":{"answer_a":"Hostnames of all devices on the network segment","answer_b":"The IP address of the default gateway","answer_c":"CPU and memory info","answer_d":"IP addresses to hostnames mappings"},"multiple_correct_answers":"false","correct_answers":{"answer_a_correct":"false","answer_b_correct":"false","answer_c_correct":"false","answer_d_correct":"true"},"correct_answer":"answer_d", "tags":[{"name":"Linux"}],"category":"Linux","difficulty":"Medium"},{"id":648,"question":"Which command can be used to determine file type by its content?","description":null,"answers":{"answer_a":"file","answer_b":"ls \u2013l","answer_c":"type","answer_d":"None of the above."},"multiple_correct_answers":"false","correct_answers":{"answer_a_correct":"true","answer_b_correct":"false","answer_c_correct":"false","answer_d_correct":"false"},"correct_answer":"answer_a","tags":[{"name":"BASH"}],"category":"Linux","difficulty":"Easy"},{"id":749,"question":"What is the Container Runtime?","description":null,"answers":{"answer_a":"Software that is responsible for running containers","answer_b":"An API object that manages a replicated application","answer_c":"Stored instance of a Container that holds a set of software needed to run an application","answer_d":"A command line tool for communicating with a Kubernetes API server"},"multiple_correct_answers":"false","correct_answers":{"answer_a_correct":"true","answer_b_correct":"false","answer_c_correct":"false","answer_d_correct":"false"},"correct_answer":"answer_a","tags":[{"name":"Kubernetes"}],"category":"Linux","difficulty":"Easy"},{"id":46,"question":"Which of the following answers refers to a software tool used for searching and installing software packages on Debian and Debian-based Linux distributions?","description":null,"answers":{"answer_a":"rpm","answer_b":"apt-rpm","answer_c":"yum","answer_d":"apt-get"},"multiple_correct_answers":"false","correct_answers":{"answer_a_correct":"false","answer_b_correct":"false","answer_c_correct":"false","answer_d_correct":"true"},"correct_answer":"answer_d","tags":[{"name":"Linux"}],"category":"Linux","difficulty":"Easy"},{"id":34,"question":"Which command is used to create file archives in Linux?","description":null,"answers":{"answer_a":"arc","answer_b":"zip","answer_c":"ps","answer_d":"tar"},"multiple_correct_answers":"false","correct_answers":{"answer_a_correct":"false","answer_b_correct":"false","answer_c_correct":"false","answer_d_correct":"true"},"correct_answer":"answer_d","tags":[{"name":"Linux"}],"category":"Linux","difficulty":"Easy"},{"id":669,"question":"Choose the option to remove write permission for group & others for a file \u201ca.txt\u201d.","description":null,"answers":{"answer_a":"Select disable write for group and others where file=\u201da.txt\u201d","answer_b":"chmod go-w a.txt","answer_c":"chmod w-go a.txt","answer_d":"chmod go=\u201dr-x\u201d a.txt"},"multiple_correct_answers":"false","correct_answers":{"answer_a_correct":"false","answer_b_correct":"true","answer_c_correct":"false","answer_d_correct":"false"},"correct_answer":"answer_a","tags":[{"name":"BASH"}],"category":"Linux","difficulty":"Medium"}

    ]


    //downloaded from QuizAPI.io --- its awesome