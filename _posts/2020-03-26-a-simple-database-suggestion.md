---
layout: post
title: A simple Database Suggestion
subtitle: ''
date: 2020-03-26 18:30:00 +0000
author: Akshay Khale
header-img: ''

---
If you have been doing software development then you might have encountered a situation where you would want to deactivate a user account or mark some actions as done, where you might be using Boolean Data-type to store those actions.

E.g.

If you want to deactivate then you might have been setting boolean `is_active` field to `true` for active users and `false` for in-active users.

Or

If you want to save notification status for an order then you might have been using `email_status` as a boolean field with default value as `false` which you change it to `true` when the email status is shared with the customer.

The approach above is completely fair and it works but there is a problem in the above approach. It does not have a record of exactly when the user was `deactivated` or exactly when the `email_status` was sent to the customer.

For that, most of the developers follow a simple approach, instead of using a boolean field `is_active` they use `activated_on` (or `deactivated_on`_depends on your business requirement) Date with default value as NULL. They use fol_lowing queries to find users:

I am not saying this is the best approach but it surely helps you to make more sense out of the data in the Database and it completely depends on your business requirements.

That’s all folks!!!

Thank you for reading :) :) :)